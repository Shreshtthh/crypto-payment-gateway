import React, { useState } from 'react';
import CheckoutPanel from '../components/CheckoutPanel';
import PaymentMethodSelector from '../components/PaymentMethodSelector';
import AmountInput from '../components/AmountInput';
import CryptoWalletInput from '../components/CryptoWalletInput';
import PaymentSummary from '../components/PaymentSummary';
import StatusMessage from '../components/StatusMessage';

export default function Checkout() {
  const [currency, setCurrency] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [wallet, setWallet] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handlePay = async () => {
    setStatus('loading');
    setMessage('Processing payment...');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Payment initiated! Please complete the transaction in your wallet.');
    }, 1200);
  };

  return (
    <div className="checkout-page">
      <CheckoutPanel>
        <h2>Crypto Payment Gateway</h2>
        <PaymentMethodSelector value={currency} onChange={setCurrency} />
        <AmountInput value={amount} onChange={setAmount} />
        <CryptoWalletInput value={wallet} onChange={setWallet} />
        <PaymentSummary amount={amount} currency={currency} wallet={wallet} />
        <button className="pay-btn" onClick={handlePay} disabled={!amount || !wallet}>
          Pay Now
        </button>
        <StatusMessage status={status} message={message} />
      </CheckoutPanel>
    </div>
  );
}
