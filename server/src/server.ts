import { app } from './app';
import { env } from './config';
import { logger } from './utils';

const server = app.listen(env.PORT, () => {
  console.log('Server lsitening on port', env.PORT);
});

process.on('unhandledRejection', (error: Error) => {
  logger.error(`unhandledRejection: Error (${error.message}) `);
  server.close(() => process.exit(1));
});
