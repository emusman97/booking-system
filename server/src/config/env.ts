import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().positive(),
});

export const env = envSchema.parse({
  PORT: process.env.PORT,
});
