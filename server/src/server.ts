import { app } from './app';
import { connectDb, env } from './config';
import { logger } from './utils';

async function main() {
  process.on('unhandledRejection', (error: Error) => {
    logger.error(`unhandledRejection: Error (${error.message}) `);
    server.close(() => process.exit(1));
  });

  await connectDb();

  const server = app.listen(env.PORT, () => {
    logger.info('Server lsitening on port ' + env.PORT);
  });
}

main();
