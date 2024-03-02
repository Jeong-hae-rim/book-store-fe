import { styled } from "styled-components";
import Title from "../components/common/Title";
import Layout from "../components/layout/Layout";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import { useState } from "react";

export default function Cart() {
  const { carts, deleteCartItem } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckItem = (id: number) => {
    if (checkedItems.includes(id)) {
      //uncheck
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      //check
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleItemDelete = (id: number) => {
    //삭제 행위
    deleteCartItem(id);
  };

  return (
    <Layout>
      <Title size="large">장바구니</Title>
      <CartStyle>
        <div className="content">
          {carts.map((item) => (
            <CartItem
              key={item.id}
              cart={item}
              checkedItems={checkedItems}
              onCheck={handleCheckItem}
              onDelete={handleItemDelete}
            />
          ))}
        </div>
        <div className="summary">summary</div>
      </CartStyle>
    </Layout>
  );
}

const CartStyle = styled.div``;
