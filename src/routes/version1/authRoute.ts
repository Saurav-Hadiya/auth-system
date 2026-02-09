import express from 'express';
import { authLogin, authSignup } from '../../controllers/authController';

const authV1Routes = express();

authV1Routes.post('/signup', authSignup);
authV1Routes.get('/login', authLogin);

export default authV1Routes;
