import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import groupProductId from '../components/orderFunctions';
import OrderService from '../services/ordersService';

class OrdersController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(StatusCodes.OK).json(groupProductId(orders));
  };
}

export default OrdersController;