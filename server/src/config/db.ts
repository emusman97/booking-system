import mongoose from 'mongoose';
import { env } from './env';
import { logger } from '../utils';

const createMongoUri = (username: string, password: string) =>
  `mongodb+srv://${username}:${password}@cluster0.gm3wljs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const connectDb = async () => {
  await mongoose.connect(
    createMongoUri(env.MONGO_USERNAME ?? '', env.MONGO_PASSWORD ?? '')
  );

  logger.info('MongoDB connected successfully');
};
