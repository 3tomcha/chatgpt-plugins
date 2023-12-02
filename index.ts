import { ethers } from 'ethers';
import { config } from 'dotenv';
config();
const API_KEY = process.env.API_KEY;

const providerUrl = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;
const provider = new ethers.JsonRpcProvider(providerUrl);

const abi = [
  "function feth() external view returns (address)"
];

const contractAddress = "0xFd17FF21a39E5440b4b3652ca80f15b6FF938A51";
const contract = new ethers.Contract(contractAddress, abi, provider);

async function getFeth() {
  try {
    const address = await contract.feth()
    console.log("FETH Address", address);
  } catch (error) {
    console.error("Error", error);
  }
}

getFeth();


// async function getContractCode(address: string) {
//   try {
//     const code = await provider.getCode(address);
//     console.log("Contract Code", code);
//   } catch (error) {
//     console.error("Error", error);
//   }
// }

// getContractCode(contractAddress);