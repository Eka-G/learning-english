import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export default {
  mongodbUri: process.env.MONGODB_URI || '',
};
