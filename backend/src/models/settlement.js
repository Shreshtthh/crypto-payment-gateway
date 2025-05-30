// In-memory settlement storage for MVP
export const settlements = [
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
