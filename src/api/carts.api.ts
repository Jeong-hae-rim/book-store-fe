import { Cart } from "../models/cart.model";
import { httpClient } from "./http";

interface AddToCartProps {
  bookId: number;
  amount: number;
}

export const addToCarts = async (params: AddToCartProps) => {
  const response = await httpClient.post("/carts", params);

  return response.data;
};

export const fetchCarts = async () => {
  const response = await httpClient.get<Cart[]>("/carts");

  return response.data;
};

export const deleteToCarts = async (cartId: number) => {
  const response = await httpClient.delete(`/carts/${cartId}`);

  return response.data;
};
