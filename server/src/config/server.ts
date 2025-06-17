import express, { Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

export const setupServer = (app: Express) => {
  app.use(
    cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  );
  app.use(
    helmet({
      referrerPolicy: { policy: 'origin-when-cross-origin' },
    })
  );
  app.use(express.json());
  app.use(morgan('combined'));
};
