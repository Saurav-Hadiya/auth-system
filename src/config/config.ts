import { Config } from '../types/config';

const config: Config = {
  port: Number(process.env.PORT) ||  3001,
  db_user: process.env.MONGODB_USERNAME ?? '',
  db_password: process.env.MONGODB_PASSWORD ?? '',
  db_cluster: process.env.MONGODB_CLUSTER ?? '',
  db_name: process.env.MONGODB_DBNAME ?? '',
  db_appName: process.env.MONGODB_APPNAME ?? '',
};

export default config;
