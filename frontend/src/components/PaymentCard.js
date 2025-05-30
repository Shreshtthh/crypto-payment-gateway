import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';

function PaymentCard({ payment }) {
  let icon;
  if (payment.currency === 'BTC') icon = <FaBitcoin color="#f7931a" size={28} />;
  else if (payment.currency === 'ETH') icon = <FaEthereum color="#3c3c3d" size={28} />;
  else icon = <span>{payment.currency}</span>;

  const statusColor = payment.status === 'Confirmed' ? 'success' : 'warning';

  return (
    <Card sx={{ mb: 2, display: 'flex', alignItems: 'center', transition: 'box-shadow 0.2s', ':hover': { boxShadow: 6 } }}>
      <Box sx={{ p: 2 }}>{icon}</Box>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{payment.currency} {payment.amount}</Typography>
        <Chip label={payment.status} color={statusColor} size="small" sx={{ ml: 1 }} />
        <Typography variant="body2" color="text.secondary">{payment.date}</Typography>
      </CardContent>
    </Card>
  );
}

export default PaymentCard;
