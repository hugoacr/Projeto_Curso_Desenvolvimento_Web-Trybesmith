import express from 'express';
import UsersRoutes from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use(UsersRoutes);

export default app;
