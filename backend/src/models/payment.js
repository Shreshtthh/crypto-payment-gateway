// In-memory payment storage for MVP
export const payments = [
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
