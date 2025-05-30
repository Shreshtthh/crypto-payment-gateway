import React from 'react';

export default function PaymentSummary({ amount, currency, wallet }) {
  return (
    <div className="payment-summary">
      <h4>Summary</h4>
      <p>Amount: <strong>{amount} {currency}</strong></p>
      <p>Wallet: <span className="wallet">{wallet}</span></p>
    </div>
  );
}
