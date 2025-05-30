import React from 'react';
import '../styles/checkout.css';

export default function CheckoutPanel({ children }) {
  return (
    <div className="checkout-panel">
      {children}
    </div>
  );
}
