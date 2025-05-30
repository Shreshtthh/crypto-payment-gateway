export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString();
}

export function formatAmount(amount) {
  return Number(amount).toLocaleString(undefined, { maximumFractionDigits: 8 });
}
