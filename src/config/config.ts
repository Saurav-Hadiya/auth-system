import { Config } from '../types/config';

const config: Config = {
  port: Number(process.env.PORT) || 3000
};

export default config;
