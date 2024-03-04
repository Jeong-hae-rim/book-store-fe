import { requestHandler } from "@/api/http";
import { Order, OrderDetailItem, OrderSheet } from "@/models/order.model";

export const order = async (orderData: OrderSheet) => {
  return await requestHandler<OrderSheet>("post", "/orders", orderData);
};

export const fetchOrders = async () => {
  return await requestHandler<Order[]>("get", "/orders");
};

export const fetchOrderDetail = async (id: number) => {
  return await requestHandler<OrderDetailItem[]>("get", "/orders/${id}");
};
