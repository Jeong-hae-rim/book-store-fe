import { httpClient } from "./http";

interface AddToCartProps {
  bookId: number;
  amount: number;
}

export const addToCarts = async (params: AddToCartProps) => {
  const response = await httpClient.post("/carts", params);

  return response.data;
};
