import React, { useEffect, useState } from 'react';
import SettlementList from '../components/SettlementList';
import { fetchSettlements } from '../services/api';

function Settlements() {
  const [settlements, setSettlements] = useState([]);

  useEffect(() => {
    fetchSettlements().then(settlements => setSettlements(settlements));
  }, []);

  return (
    <div className="dashboard">
      <h2>Settlements</h2>
      <SettlementList settlements={settlements} />
    </div>
  );
}

export default Settlements;
