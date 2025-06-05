import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().positive(),
  MONGO_USERNAME: z.string(),
  MONGO_PASSWORD: z.string(),
});

export const env = envSchema.parse({
  PORT: process.env.PORT,
  MONGO_USERNAME: process.env.MONGO_USERNAME,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
});
