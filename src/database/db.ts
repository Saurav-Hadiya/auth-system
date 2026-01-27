import mongoose from 'mongoose';
import config from '../config/config';

const mongoURL = `mongodb+srv://${encodeURIComponent(config.db_user)}:${encodeURIComponent(config.db_password)}@${config.db_cluster}/${config.db_name}?appName=${config.db_appName}`;
console.log(mongoURL);

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
  } catch (error) {
    console.log(`Failed to connect mongodb database...${error}`);
    process.exit(1); //1 for failure
  }
};

export const closeDB = async (callback: () => void): Promise<void> => {
  try {
    await mongoose.connection.close();
    callback();
  } catch (error) {
    console.log(`Failed to close the mongoDB connection...${error}`);
  }
};

mongoose.connection.on('connected', () =>
  console.log('MongoDB connection established successfully...'),
);
mongoose.connection.on('disconnected', () =>
  console.log('MongoDB connection disconnected...'),
);

mongoose.connection.on('error', async (error) => {
  await closeDB(() =>
    console.log(`MongoDb connection closed due to unintended error...${error}`),
  );
});
