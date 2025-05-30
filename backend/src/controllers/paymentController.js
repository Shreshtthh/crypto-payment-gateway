import { payments } from '../models/payment.js';
import { checkFraud } from '../services/fraudService.js';
import { getTransactionStatus } from '../services/blockchainService.js';

export function getPayments(req, res) {
  res.json(payments);
}

export function createPayment(req, res) {
  const { currency, amount, from, to } = req.body;
  // Simulate fraud check
  if (checkFraud({ currency, amount, from, to })) {
    return res.status(400).json({ error: 'Fraud detected' });
  }
  const newPayment = {
    id: (payments.length + 1).toString(),
    currency,
    amount,
    date: new Date().toISOString(),
    status: 'Pending',
    from,
    to,
    txHash: '0x' + Math.random().toString(16).slice(2),
    txUrl: '#'
  };
  payments.push(newPayment);
  res.status(201).json(newPayment);
}

export async function getPaymentStatus(req, res) {
  const { currency, txHash } = req.query;
  if (!currency || !txHash) {
    return res.status(400).json({ error: 'currency and txHash are required' });
  }
  const status = await getTransactionStatus({ currency, txHash });
  res.json({ status });
}
