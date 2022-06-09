import express from 'express';
import UsersRoutes from './routes/usersRoutes';
import ProductsRoutes from './routes/productsRoutes';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use(UsersRoutes);

app.use(ProductsRoutes);

export default app;
