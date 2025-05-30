// Replace with your actual backend API endpoints

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export async function fetchPayments() {
  // Simulate API call for MVP
  return [
    {
      id: '1',
      currency: 'BTC',
      amount: 0.01,
      date: new Date().toISOString(),
      status: 'Confirmed',
      from: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      to: '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
      txHash: '0xabc123',
      txUrl: 'https://www.blockchain.com/btc/tx/0xabc123'
    },
    {
      id: '2',
      currency: 'ETH',
      amount: 0.5,
      date: new Date().toISOString(),
      status: 'Pending',
      from: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      to: '0x53d284357ec70ce289d6d64134dfac8e511c8a3d',
      txHash: '0xdef456',
      txUrl: 'https://etherscan.io/tx/0xdef456'
    }
  ];
}

export async function fetchSettlements() {
  // Simulate API call for MVP
  return [
    {
      id: 's1',
      currency: 'USDC',
      amount: 1000,
      date: new Date().toISOString(),
      status: 'Completed'
    },
    {
      id: 's2',
      currency: 'ETH',
      amount: 2,
      date: new Date().toISOString(),
      status: 'In Progress'
    }
  ];
}
