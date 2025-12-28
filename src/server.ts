import dotenv from 'dotenv';
import app from './app';
import config from './config/config';

dotenv.config();

const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

//Gracefully server closed
process.on('SIGTERM', () => {
  console.log('SIGTERM signal is received...');
  server.close(() => {
    console.log('Database connection closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal is received...');
  server.close(() => {
    console.log('Database connection closed...');
    process.exit(0);
  });
});
