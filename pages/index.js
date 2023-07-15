import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [contract, setContractDetails] = useState(undefined);
  const [txt, setTxt] = useState("");
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [result, setresult] = useState(0);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getContract();
  };

  const getContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(contractAddress, atmABI, signer);
    setContractDetails(Contract);
  }


  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet To Use our Calculator App</button>
    }


    

    return (
      <div>
        <p style={{marginBottom: "50px"}}> <b> Your Account Address : </b>{account}</p>
        <b>Enter Number 1</b><input type="number" placeholder="0" className="input-style"
        onChange={(e)=>{setnum1(e.target.value)}}/>
        <br /> 
        <b>Enter Number 2</b>
        <input type="number" placeholder="0"  className="input-style"
        onChange={(e)=>{setnum2(e.target.value)}}/>
        <button onClick={addNumber} className="btn">Add</button>
        <button onClick={subtractNumber} className="btn">Subtract</button>
        <button onClick={multiplyNumber} className="btn">Multiply</button>
        <button onClick={divideNumber} className="btn">Divide</button>
        <p> <b>{txt} Result: </b>{result}</p>
        <style jsx>{`
        .input-style{
          padding: 10px 20px;
          margin: 10px auto;
          border-radius: 8px;
          display: block
        }
        .btn {
          padding : 10px 20px;
          margin: 27px;
          border-radius: 10px
        }
      `}
      </style>
      </div>
    )
  }
  const addNumber = async() =>{
    let res= (await contract.add(num1,num2)).toNumber();
    setresult(res);
    setTxt("Addition");
  }
  const subtractNumber = async() =>{
    let res= (await contract.subtract(num1,num2)).toNumber();
    setresult(res);
    setTxt("Subtraction");

  }
  const multiplyNumber = async() =>{
    let res= (await contract.multiply(num1,num2)).toNumber();
    setresult(res);
    setTxt("Multiplication");

  }
  const divideNumber = async() =>{
    let res= (await contract.divide(num1,num2)).toNumber();
    setresult(res);
    setTxt("Division");

  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">

      <header><h1>Welcome to our calculator app which uses contract functions</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          width: 80%;
          text-align: center;
          display: block;
          margin: 100px auto;
          padding: 20px;
          border: 1px solid black
        }
      `}
      </style>
    </main>
  )
}