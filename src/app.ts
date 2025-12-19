import express, { Request, Response } from 'express';
import { errorHandler } from './middlewares/errorHandler';

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

// Global error handler
app.use(errorHandler)

export default app;
