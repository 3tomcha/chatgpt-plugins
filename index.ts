// import { ethers } from 'ethers';
import { config } from 'dotenv';
import axios from 'axios';
import express from 'express';

config();

const API_KEY = process.env.API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/abi/:contractAddress", async (req, res) => {
  const { contractAddress } = req.params;
  const abi = await getAbi(contractAddress);
  res.send(abi);
});

const getAbi = async (contractAddress: string) => {
  try {
    const response = await axios.get(`https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${ETHERSCAN_API_KEY}`);
    console.log(response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("Error", error);
  }
}

const main = async () => {
  const abi = getAbi("0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359");
}

// main();

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));