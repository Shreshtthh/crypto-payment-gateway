import React from 'react';

export default function AmountInput({ value, onChange }) {
  return (
    <div className="amount-input">
      <label>Amount</label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Enter amount"
      />
    </div>
  );
}
