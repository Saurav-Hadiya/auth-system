import express from 'express';
import v1Routes from './version1';

const router = express();

// Routes setup
router.use('/v1', v1Routes);

export default router;
