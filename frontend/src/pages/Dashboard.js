import React, { useEffect, useState } from 'react';
import PaymentList from '../components/PaymentList';
import PaymentDetails from '../components/PaymentDetails';
import { fetchPayments } from '../services/api';

function Dashboard() {
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    fetchPayments().then(setPayments);
  }, []);

  return (
    <div className="dashboard">
      <h2>Payments</h2>
      <div className="dashboard-content">
        <PaymentList
          payments={payments}
          onSelect={setSelectedPayment}
        />
        {selectedPayment && (
          <PaymentDetails payment={selectedPayment} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;


