import { requestHandler } from "@/api/http";
import { Cart } from "@/models/cart.model";

interface AddToCartProps {
  bookId: number;
  amount: number;
}

export const fetchCarts = async () => {
  return await requestHandler<Cart[]>("get", "/carts");
};

export const addToCarts = async (params: AddToCartProps) => {
  return await requestHandler<AddToCartProps>("post", "/carts", params);
};

export const deleteToCarts = async (cartId: number) => {
  return await requestHandler<AddToCartProps>("delete", `/carts/${cartId}`);
};
