import express from 'express';
import { authLogin } from '../../controllers/authController';

const authV1Routes = express();

authV1Routes.get('/login', authLogin);

export default authV1Routes;
