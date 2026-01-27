import app from './app';
import config from './config/config';
import { closeDB, connectDB } from './database/db';

// connect to the database
connectDB();

// Run the application server
const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

// callback function to shutdown the server
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
