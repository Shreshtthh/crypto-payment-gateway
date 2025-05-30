// Dummy conversion for MVP
export function convertToFiat(amount, currency) {
  const rates = { BTC: 70000, ETH: 3500, USDC: 1 };
  return amount * (rates[currency] || 0);
}
