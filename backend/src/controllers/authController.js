import jwt from 'jsonwebtoken';
import config from '../config/index.js';

export function login(req, res) {
  const { email, password } = req.body;
  // For MVP: any email/password accepted
  if (email && password) {
    const token = jwt.sign({ email }, config.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } else {
    res.status(400).json({ error: 'Invalid credentials' });
  }
}
