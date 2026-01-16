import { Request, Response } from 'express';

export const authLogin = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'User loggd in successfully',
    data: {},
  });
};
