import { useEffect, useState } from "react";

import { Cart } from "@/models/cart.model";

import { addToCarts, deleteToCarts, fetchCarts } from "@/api/carts.api";

import { useAlert } from "@/hooks/useAlert";

export const useCart = (bookId?: number) => {
  const [cartAdded, setCartAdded] = useState<boolean>(false);
  const [carts, setCarts] = useState<Cart[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const { showAlert } = useAlert();

  const deleteCartItem = (id: number) => {
    deleteToCarts(id).then(() => {
      setCarts(carts.filter((cart) => cart.id !== id));
    });
  };

  useEffect(() => {
    fetchCarts().then((carts) => {
      setCarts(carts);
      setIsEmpty(carts.length === 0);
    });
  }, []);

  const addToCart = (amount: number) => {
    addToCarts({
      bookId: bookId as number,
      amount: amount,
    })
      .then((res) => {
        setCartAdded(true);
        setIsEmpty(false);
        setTimeout(() => {
          setCartAdded(false);
        }, 3000);
      })
      .catch((res) => {
        showAlert("로그인이 필요한 서비스입니다.");
      });
  };

  return { addToCart, cartAdded, carts, deleteCartItem, isEmpty };
};
