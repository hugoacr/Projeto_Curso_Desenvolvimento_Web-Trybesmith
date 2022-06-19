import connection from '../models/connection';
import { IOrder } from '../interfaces/orderInterface';
import OrderModel from '../models/ordersModels';

class ProductService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;