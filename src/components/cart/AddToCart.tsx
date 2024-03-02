import { styled } from "styled-components";
import { BookDetail } from "../../models/book.model";
import InputText from "../common/InputText";
import Button from "../common/Button";
import { useState } from "react";

interface Props {
  book: BookDetail;
}

export default function AddToCart({ book }: Props) {
  const [amount, setAmount] = useState<number>(1);

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
      <AddToCartStyle>
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
        <Button size="medium" schema="primary">
          장바구니 담기
        </Button>
      </AddToCartStyle>
    </>
  );
}

const AddToCartStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
