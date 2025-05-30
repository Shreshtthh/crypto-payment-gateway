import React from 'react';
import { formatDate, formatAmount } from '../utils/format';

function PaymentDetails({ payment }) {
  if (!payment) return null;

  return (
    <div className="details-container">
      <h3>Payment Details</h3>
      <p><strong>ID:</strong> {payment.id}</p>
      <p><strong>Currency:</strong> {payment.currency}</p>
      <p><strong>Amount:</strong> {formatAmount(payment.amount)}</p>
      <p><strong>Date:</strong> {formatDate(payment.date)}</p>
      <p><strong>Status:</strong> {payment.status}</p>
      <p><strong>From:</strong> {payment.from}</p>
      <p><strong>To:</strong> {payment.to}</p>
      <p><strong>Tx Hash:</strong> <a href={payment.txUrl} target="_blank" rel="noopener noreferrer">{payment.txHash}</a></p>
    </div>
  );
}

export default PaymentDetails;
