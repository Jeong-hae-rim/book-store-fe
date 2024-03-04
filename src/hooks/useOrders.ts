import { useEffect, useState } from "react";
import { OrderListItem } from "../models/order.model";
import { fetchOrderDetail, fetchOrders, order } from "../api/order.api";

export const useOrders = () => {
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then((res) => {
      setOrders(res);
    });
  }, []);

  const selectOrderItem = (orderId: number) => {
    //요청 방어
    if (orders.filter((item) => item.id === orderId)[0].detail) {
      setSelectedItemId(orderId);
      return;
    }

    fetchOrderDetail(orderId).then((res) => {
      setSelectedItemId(orderId);
      setOrders(
        orders.map((item) => {
          if (item.id === orderId) {
            return {
              ...item,
              detail: res,
            };
          }
          return item;
        })
      );
    });
  };

  return { orders, selectedItemId, selectOrderItem };
};
