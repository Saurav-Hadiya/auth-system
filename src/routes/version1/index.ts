import express from 'express';
import authV1Routes from './authRoute';

const v1Routes = express();

v1Routes.use('/auth', authV1Routes)

export default v1Routes;
