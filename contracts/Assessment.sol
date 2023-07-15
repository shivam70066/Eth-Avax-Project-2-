// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//import "hardhat/console.sol";

contract Assessment {
    
    function add(uint num1,uint num2) public pure returns(uint256){
        uint result =  num1 + num2;
        return result;
    }
    function subtract(uint num1,uint num2) public pure returns(uint256){
        uint result =  num1 - num2;
        return result;
    }
    function multiply(uint num1,uint num2) public pure returns(uint256){
        uint result =  num1 * num2;
        return result;
    }
    function divide(uint num1,uint num2) public pure returns(uint256){

        if(num2==0){
            revert("A number can't be divided by zero");
        }
        return num1 / num2;
    }

}
