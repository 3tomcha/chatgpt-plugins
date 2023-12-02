import { ethers } from 'ethers';
import { config } from 'dotenv';
import axios from 'axios';

config();

const API_KEY = process.env.API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const getAbi = async () => {
  try {
    const abi = await axios.get("https://api.etherscan.io/api?module=contract&action=getabi&address=0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359&apikey=" + ETHERSCAN_API_KEY);
    console.log(abi);
    return abi;
  } catch (error) {
    console.error("Error", error);
  }
}

const abi = getAbi();

// const providerUrl = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;
// const provider = new ethers.JsonRpcProvider(providerUrl);

// const abi = [
//   "function feth() external view returns (address)"
// ];

// const contractAddress = "0xFd17FF21a39E5440b4b3652ca80f15b6FF938A51";
// const contract = new ethers.Contract(contractAddress, abi, provider);

// async function getFeth() {
//   try {
//     const address = await contract.feth()
//     console.log("FETH Address", address);
//   } catch (error) {
//     console.error("Error", error);
//   }
// }

// getFeth();
