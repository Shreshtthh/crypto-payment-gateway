import React from 'react';
import { formatDate, formatAmount } from '../utils/format';

function SettlementList({ settlements }) {
  return (
    <div className="list-container">
      <h3>Settlement History</h3>
      <ul className="list">
        {settlements.map(settlement => (
          <li key={settlement.id} className="list-item">
            <span>{settlement.currency} {formatAmount(settlement.amount)}</span>
            <span>{formatDate(settlement.date)}</span>
            <span>Status: {settlement.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SettlementList;
