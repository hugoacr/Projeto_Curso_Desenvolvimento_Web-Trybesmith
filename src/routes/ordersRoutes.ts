import { Router } from 'express';
import OrdersController from '../controllers/ordersController';

const router = Router();

const ordersController = new OrdersController();

router.get('/orders', ordersController.getAll);

export default router;