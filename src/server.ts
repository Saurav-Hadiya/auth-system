import dotenv from 'dotenv';
import app from './app';
import config from './config/config';
import { closeDB } from './database/db';

dotenv.config();

const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

const shutDown = () => {
  console.log('Shuutting down the server...');
  server.close(() => {
    closeDB(() =>
      console.log(
        'MongoDB connection closed due to application server closed...',
      ),
    );
    process.exit(0);
  });
};

//Gracefully server closed
process.on('SIGTERM', shutDown);

process.on('SIGINT', shutDown);
