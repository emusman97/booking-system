import express, { Express } from 'express';
import helmet from 'helmet';

export const setupServer = (app: Express) => {
  app.use(helmet());
  app.use(express.json());
};
