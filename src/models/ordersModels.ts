import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/orderInterface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const result = await this.connection
      .execute(`
        SELECT O.id, O.userId, P.id as productsIds FROM Trybesmith.Orders AS O 
        INNER JOIN Trybesmith.Products as P ON P.orderId = O.id`);
    const [rows] = result;
    return rows as IOrder[];
  }
}