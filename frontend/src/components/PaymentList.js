import React from 'react';
import PaymentCard from './PaymentCard';

function PaymentList({ payments, onSelect }) {
  return (
    <div>
      {payments.map(payment => (
        <div key={payment.id} onClick={() => onSelect && onSelect(payment)} style={{ cursor: 'pointer' }}>
          <PaymentCard payment={payment} />
        </div>
      ))}
    </div>
  );
}

export default PaymentList;


