import express, { Request, Response } from 'express';
import helmet from 'helmet';
import { env } from './config';

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
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

app.listen(env.PORT, () => {
  console.log('Server lsitening on port', env.PORT);
});
