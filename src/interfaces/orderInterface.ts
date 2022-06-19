export interface IOrder {
  id?: number;
  userId: number;
  productsIds: number;
}

export interface IGroupOrders {
  id: number;
  userId: number;
  productsIds: number[];
}
