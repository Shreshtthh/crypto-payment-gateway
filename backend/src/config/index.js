import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 4000,
  JWT_SECRET: process.env.JWT_SECRET || 'dev-secret'
};
