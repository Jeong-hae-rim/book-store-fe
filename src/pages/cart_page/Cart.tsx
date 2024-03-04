import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { styled } from "styled-components";

import { OrderSheet } from "@/models/order.model";

import { useCart } from "@/hooks/useCart";
import { useAlert } from "@/hooks/useAlert";

import { FaShoppingCart } from "react-icons/fa";
import Title from "@/components/common/Title";
import Empty from "@/components/common/Empty";
import Layout from "@/components/layout/Layout";
import Button from "@/components/common/Button";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

export default function Cart() {
  const { carts, deleteCartItem, isEmpty } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const { showAlert, showConfirm } = useAlert();
  const navigate = useNavigate();

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

  const handleTotalAmount = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.amount;
      }
      return acc;
    }, 0);
  }, [carts, checkedItems]);

  const handleTotalPrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.price * cart.amount;
      }
      return acc;
    }, 0);
  }, [carts, checkedItems]);

  const handleOrder = () => {
    if (checkedItems.length === 0) {
      showAlert("주문할 상품을 선택해 주세요.");
      return;
    }

    //주문 액션 => 주문서 작성으로 데이터 전달
    const orderData: Omit<OrderSheet, "delivery"> = {
      items: checkedItems,
      totalAmount: handleTotalAmount,
      totalPrice: handleTotalPrice,
      firstBookTitle: carts[0].title,
    };

    showConfirm("주문하시겠습니까?", () =>
      navigate("/order", { state: orderData })
    );
  };

  return (
    <Layout>
      <Title size="large">장바구니</Title>
      <CartStyle>
        {!isEmpty && (
          <>
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
            <div className="summary">
              <CartSummary
                totalAmount={handleTotalAmount}
                totalPrice={handleTotalPrice}
              />
              <Button size="large" schema="primary" onClick={handleOrder}>
                주문하기
              </Button>
            </div>
          </>
        )}
        {isEmpty && (
          <Empty
            title="장바구니가 비었습니다."
            icon={<FaShoppingCart />}
            description={<>장바구니를 채워보세요!</>}
          />
        )}
      </CartStyle>
    </Layout>
  );
}

export const CartStyle = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 0 24px 0;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .order-info {
    padding: 24px;
    h1 {
      padding: 0 0 24px 0;
    }

    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }

  .delivery {
    fieldset {
      border: 0;
      margin: 0;
      padding: 0 0 12px 0;
      display: flex;
      justify-content: start;
      gap: 8px;

      label {
        width: 80px;
      }

      .input {
        flex: 1;
        input {
          width: 100%;
        }
      }
    }

    .error-text {
      color: red;
      margin: 0;
      padding: 0 0 12px 0;
      text-align: right;
    }
  }
`;
