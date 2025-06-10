import express, { Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

export const setupServer = (app: Express) => {
  app.use(helmet());
  app.use(express.json());
  app.use(morgan('combined'));
};
