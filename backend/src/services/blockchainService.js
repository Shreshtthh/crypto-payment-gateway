import axios from 'axios';
import Web3 from 'web3';
import config from '../config/index.js';

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;

// ETH/USDC: Connect to Infura (mainnet or testnet)
const web3 = new Web3(`https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`);

 
 
export async function getBTCTransactionStatus(txHash) {
  try {
    // Blockstream API: https://blockstream.info/api/tx/{txid}/status
    const url = `https://blockstream.info/api/tx/${txHash}/status`;
    const res = await axios.get(url);
    // Example response: { confirmed: true, block_height: 123456, ... }
    return res.data.confirmed ? 'Confirmed' : 'Pending';
  } catch (err) {
    console.error('BTC status error:', err.message);
    return 'Unknown';
  }
}

 
export async function getETHTransactionStatus(txHash) {
  try {
    // Etherscan API: https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=...
    const url = `https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=${txHash}&apikey=${ETHERSCAN_API_KEY}`;
    const res = await axios.get(url);
    // status: "1" = success, "0" = fail
    if (res.data.status === "1" && res.data.result && res.data.result.status === "1") {
      return 'Confirmed';
    } else if (res.data.status === "1" && res.data.result && res.data.result.status === "0") {
      return 'Failed';
    } else {
      return 'Pending';
    }
  } catch (err) {
    console.error('ETH status error:', err.message);
    return 'Unknown';
  }
}

 
export async function getUSDCTransactionStatus(txHash) {
   
  return getETHTransactionStatus(txHash);
}

export async function getTransactionStatus({ currency, txHash }) {
  if (currency === 'BTC') {
    return await getBTCTransactionStatus(txHash);
  } else if (currency === 'ETH') {
    return await getETHTransactionStatus(txHash);
  } else if (currency === 'USDC') {
    return await getUSDCTransactionStatus(txHash);
  } else {
    return 'Unsupported';
  }
}


export async function getERC20TransferDetails(txHash, tokenAddress) {
  try {
    const receipt = await web3.eth.getTransactionReceipt(txHash);
    if (!receipt) return null;

    // ERC20 Transfer event signature
    const transferEventSig = web3.utils.sha3('Transfer(address,address,uint256)');
    const transferLog = receipt.logs.find(
      log => log.address.toLowerCase() === tokenAddress.toLowerCase() &&
             log.topics[0] === transferEventSig
    );

    if (!transferLog) return null;

    // Decode topics/data
    const from = '0x' + transferLog.topics[1].slice(26);
    const to = '0x' + transferLog.topics[2].slice(26);
    const value = web3.utils.hexToNumberString(transferLog.data);

    return { from, to, value };
  } catch (err) {
    console.error('ERC20 details error:', err.message);
    return null;
  }
}
