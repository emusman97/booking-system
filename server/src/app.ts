import express, { Request, Response, Router } from 'express';
import { setupServer } from './config';
import { BASE_ENDPOINT } from './constants';
import { tourRouter } from './routes';

const app = express();

function addRouters(routers: { route: string; router: Router }[]) {
  routers.forEach(({ route, router }) =>
    app.use(`${BASE_ENDPOINT}/${route}`, router)
  );
}

function main() {
  setupServer(app);

  app.get(BASE_ENDPOINT, (_: Request, res: Response) => {
    res.send('Express + TypeScript + Mongoose Server');
  });

  addRouters([{ route: 'tours', router: tourRouter }]);

  app.all('/{*any}', (_, res: Response) => {
    res
      .json({
        message: 'You seem to be lost my friend',
      })
      .status(404)
      .send();
  });
}

main();

export { app };
