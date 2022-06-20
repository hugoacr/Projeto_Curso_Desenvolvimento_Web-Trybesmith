import { IOrder, IGroupOrders } from '../interfaces/orderInterface';

function indiceByOrder(orders: IOrder[]): string[] {
  const listOrder = new Set<string>();
  for (let i = 0; i < orders.length; i += 1) {
    listOrder.add(
      `${Object.values(orders[i])[0]}-${Object.values(orders[i])[1]}`,
    );
  }
  return Array.from(listOrder); // O spread estava dando erro então segui a sugestão desse link https://stackoverflow.com/questions/53441292/why-downleveliteration-is-not-on-by-default 
}
  
function groupByOrder(
  orders: IOrder[],
) {
  const newOrders: IGroupOrders[] = [];
  for (let i = 0; i < indiceByOrder(orders).length; i += 1) {
    newOrders.push({
      id: Number(indiceByOrder(orders)[i].split('-')[0]),
      userId: Number(indiceByOrder(orders)[i].split('-')[1]),
      productsIds: [],
    });
  }
  return newOrders;
}

function listProductId(
  listOrder: { id: number, userId: number, productsIds: number[] }[],
  o: number,
  orders: IOrder[],
) {
  for (let p = 0; p < orders.length; p += 1) {
    if (
      listOrder[o].id === orders[p].id
            && listOrder[o].userId === orders[p].userId
    ) {
      listOrder[o].productsIds.push(orders[p].productsIds);
    }
  }    
}

function groupProductId(orders: IOrder[]) {
  const listOrder = groupByOrder(orders);
  for (let o = 0; o < listOrder.length; o += 1) {
    listProductId(listOrder, o, orders);
  }
  return listOrder;
}

export default groupProductId;