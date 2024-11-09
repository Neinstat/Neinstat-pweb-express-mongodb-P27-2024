import express from 'express';
import userRoutes from './routes/userRoutes';
import connectDB from './utils/db';

const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);

export default app;
