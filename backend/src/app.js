import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import settlementRoutes from './routes/settlementRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/settlements', settlementRoutes);

app.get('/', (req, res) => res.send('Crypto Payment Gateway Backend'));

export default app;
