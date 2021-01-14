import * as Winston from 'winston';
import * as WinstonDaily from 'winston-daily-rotate-file'; 

export default Winston.createLogger({
    level: 'info',
    format: Winston.format.combine(
      Winston.format.json(),
      Winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      Winston.format.simple(),
    ),
    transports: [
      new Winston.transports.File({
        filename: './logs/ServerLog.log',
      }),
      new WinstonDaily({
        filename: './logs/Date/Log_%DATE%.log',
        datePattern: 'YYYY-MM-DD',
      }),
    ],
  });