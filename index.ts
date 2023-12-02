import ethers from 'ethers';

const providerUrl = "https://eth-goerli.g.alchemy.com/v2/lQQcdlj4Fye1AKw5R94wVNA-BDKevm0W";
const provider = new ethers.JsonRpcProvider(providerUrl);

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function getContractCode(address: string) {
  try {
    const code = await provider.getCode(address);
    console.log("Contract Code", code);
  } catch (error) {
    console.error("Error", error);
  }
}

getContractCode(contractAddress);