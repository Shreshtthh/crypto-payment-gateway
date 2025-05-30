import React from 'react';

export default function CryptoWalletInput({ value, onChange }) {
  return (
    <div className="wallet-input">
      <label>Your Crypto Wallet Address</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Paste your wallet address"
      />
    </div>
  );
}
