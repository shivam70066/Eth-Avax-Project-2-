# Shivam's calculator DApp

This project is a decentralized application (DApp) that interacts with the smart contract.

## Description

This DApp is built using Hardhat and React. It consists of a smart contract written in Solidity and a React frontend that provides a user-friendly interface to interact with the contract. The smart contract handles the logic for the addition, subtraction, multiplication and division of two numbers that is given from fronend. The React frontend then display the result which is being produced by our smart contract functions.

## Getting Started

### Installing

To download the project, you can clone the repository using the following command:

```
git clone https://github.com/shivam70066/Eth-Avax-Project-2-
```

After cloning the repository, navigate to the project's root directory.

### Executing program

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.
  After this, the project will be running on your localhost. Typically at http://localhost:3000/

## Authors

- Shivam Gupta

## License

This code is released under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.
