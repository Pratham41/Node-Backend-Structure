import express from 'express';
import dotenv from 'dotenv';

import customerRouter from './routes/customerRoute.js';

const app = express();

dotenv.config();

app.use(express.json());

app.use('/api/customer', customerRouter);

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log('server is running on port 5000');
});
