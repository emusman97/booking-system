import express, { Request, Response } from 'express';
import { setupServer } from './config';

const app = express();

setupServer(app);

app.get('/', (_: Request, res: Response) => {
  res.send('Express + TypeScript + Mongoose Server');
});

app.all('/{*any}', (_, res: Response) => {
  res
    .json({
      message: 'You seem to be lost my friend',
    })
    .status(404)
    .send();
});

export { app };
