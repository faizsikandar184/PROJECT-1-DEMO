import dotenv from 'dotenv';

dotenv.config({
    path: `.env.${process.env.TEST_ENV || 'qa'}`
});

export const env = {
    baseUrl: process.env.BASE_URL || '',
    username: process.env.USERNAME || '',
    password: process.env.PASSWORD || ''
};