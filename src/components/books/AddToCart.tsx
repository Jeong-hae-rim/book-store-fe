import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { BookDetail } from "@/models/book.model";
import { useCart } from "@/hooks/useCart";

import InputText from "@/components/common/InputText";
import Button from "@/components/common/Button";

interface Props {
  book: BookDetail;
}

export default function AddToCart({ book }: Props) {
  const [amount, setAmount] = useState<number>(1);
  const { addToCart, cartAdded } = useCart(book.id);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleIncrease = () => {
    setAmount(amount + 1);
  };

  const handleDecrease = () => {
    if (amount === 1) return;

    setAmount(amount - 1);
  };

  return (
    <>
      <AddToCartStyle $added={cartAdded}>
        <div>
          <InputText
            inputType="number"
            value={amount}
            onChange={handleChange}
          />
          <Button size="medium" schema="normal" onClick={handleIncrease}>
            +
          </Button>
          <Button size="medium" schema="normal" onClick={handleDecrease}>
            -
          </Button>
        </div>
        <Button
          size="medium"
          schema="primary"
          onClick={() => addToCart(amount)}
        >
          장바구니 담기
        </Button>
        {cartAdded && (
          <div className="added">
            <p>장바구니에 추가되었습니다.</p>
            <Link to="/cart">장바구니로 이동</Link>
          </div>
        )}
      </AddToCartStyle>
    </>
  );
}

interface AddToCartStyleProps {
  $added: boolean;
}

const AddToCartStyle = styled.div<AddToCartStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .added {
    position: absolute;
    right: 0;
    bottom: -90px;
    background: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 8px 12px;
    opacity: ${({ $added }) => ($added ? "1" : "0")};
    transition: all 1s ease;

    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }
`;
