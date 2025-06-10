import winston from 'winston';

const { combine, timestamp, printf, colorize, align } = winston.format;
const transports = winston.transports;

export const logger = winston.createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new transports.Console({ format: winston.format.simple() })],
});
