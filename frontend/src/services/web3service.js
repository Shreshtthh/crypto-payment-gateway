import Web3 from 'web3';

// For MVP, simple utility for connecting to MetaMask
export async function connectMetaMask() {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    return web3;
  } else {
    alert('MetaMask not detected!');
    return null;
  }
}
