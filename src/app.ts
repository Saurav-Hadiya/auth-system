import express, { Request, Response } from 'express';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/health', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Auth system is healthy',
    data: [],
  });
});

app.use('/api', router);

export default app;
