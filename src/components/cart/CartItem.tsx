import { useMemo } from "react";
import styled from "styled-components";

import { Cart } from "@/models/cart.model";

import { useAlert } from "@/hooks/useAlert";
import { formatNumber } from "@/utils/format";

import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import CheckIconButton from "@/components/cart/CheckIconButton";

interface Props {
  cart: Cart;
  checkedItems: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

const CartItem = ({ cart, checkedItems, onCheck, onDelete }: Props) => {
  const { showConfirm } = useAlert();
  //checkedItems 목록에 내가 있는지 판단 = 있으면 checked
  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);

  const handleCheck = () => {
    onCheck(cart.id);
  };

  const handleDelete = () => {
    //confirm ?
    showConfirm("정말 삭제하시겠습니까?", () => onDelete(cart.id));
  };

  return (
    <CartItemStyle>
      <div className="info">
        <div className="checked">
          <CheckIconButton isChecked={isChecked} onCheck={handleCheck} />
        </div>
        <div>
          <Title size="medium" color="text">
            {cart.title}
          </Title>
          <p className="summary">{cart.summary}</p>
          <p className="price">{formatNumber(cart.price)}</p>
          <p className="amount">{cart.amount}권</p>
        </div>
      </div>
      <Button size="medium" schema="normal" onClick={handleDelete}>
        장바구니 삭제
      </Button>
    </CartItemStyle>
  );
};

const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};

  .info {
    display: flex;
    align-items: start;
    flex: 1;
    padding: 8px;

    p {
      padding: 0 0 8px 0;
      margin: 0;
    }

    .checked {
      width: 40px;
      flex-shrink: 0;
    }
  }
`;

export default CartItem;
