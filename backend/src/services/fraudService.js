// Simple fraud check: block amounts > 100 BTC/ETH/USDC for MVP
export function checkFraud({ amount }) {
  return Number(amount) > 100;
}
import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);

export default router;
