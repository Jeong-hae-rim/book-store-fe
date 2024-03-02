import { useState } from "react";
import { useAlert } from "./useAlert";
import { addToCarts } from "../api/carts.api";

export const useCart = (bookId: number) => {
  const [cartAdded, setCartAdded] = useState<boolean>(false);

  const { showAlert } = useAlert();

  const addToCart = (amount: number) => {
    addToCarts({
      bookId: bookId,
      amount: amount,
    })
      .then((res) => {
        setCartAdded(true);
        setTimeout(() => {
          setCartAdded(false);
        }, 3000);
      })
      .catch((res) => {
        showAlert("로그인이 필요한 서비스입니다.");
      });
  };

  return { addToCart, cartAdded };
};
