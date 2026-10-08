import dotenv from 'dotenv';

dotenv.config({
  path: `config/.env.${process.env.TEST_ENV || 'qa'}`
});

export const env = {
  baseUrl: process.env.BASE_URL || ''
};