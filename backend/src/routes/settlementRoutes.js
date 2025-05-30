import express from 'express';
import { getSettlements } from '../controllers/settlementController.js';
import { authenticate } from '../utils/auth.js';

const router = express.Router();

router.get('/', authenticate, getSettlements);

export default router;
