import { app } from './app';
import { env } from './config';

const server = app.listen(env.PORT, () => {
  console.log('Server lsitening on port', env.PORT);
});

process.on('unhandledRejection', (error: Error) => {
  console.log('unhandledRejection', error);
  server.close(() => process.exit(1));
});
