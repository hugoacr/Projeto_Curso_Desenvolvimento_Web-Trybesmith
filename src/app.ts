import express from 'express';
import UsersRoutes from './routes/usersRoutes';
import ProductsRoutes from './routes/productsRoutes';
import OrdersRoutes from './routes/ordersRoutes';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use(UsersRoutes);

app.use(ProductsRoutes);

app.use(OrdersRoutes);

export default app;
