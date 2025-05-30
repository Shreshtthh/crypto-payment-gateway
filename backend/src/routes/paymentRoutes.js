import express from 'express';
import { getPayments, createPayment } from '../controllers/paymentController.js';
import { authenticate } from '../utils/auth.js';
import { getPaymentStatus } from '../controllers/paymentController.js';

const router = express.Router();

router.get('/', authenticate, getPayments);
router.post('/', authenticate, createPayment);
router.get('/status', authenticate, getPaymentStatus);
export default router;
