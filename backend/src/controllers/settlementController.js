import { settlements } from '../models/settlement.js';

export function getSettlements(req, res) {
  res.json(settlements);
}
