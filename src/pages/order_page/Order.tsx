import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";

import { Delivery, OrderSheet } from "@/models/order.model";

import { order } from "@/api/order.api";

import { useAlert } from "@/hooks/useAlert";

import { CartStyle } from "@/pages/cart_page/Cart";

import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import InputText from "@/components/common/InputText";
import CartSummary from "@/components/cart/CartSummary";
import FindAddressButton from "@/components/button/FindAddressButton";

interface DeliveryForm extends Delivery {
  addressDetail: string;
}

export default function Order() {
  const location = useLocation();
  const orderDataFromCart = location.state;
  const { totalAmount, totalPrice, firstBookTitle } = orderDataFromCart;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<DeliveryForm>();
  const { showAlert, showConfirm } = useAlert();
  const navigate = useNavigate();

  const handlePay = (data: DeliveryForm) => {
    const orderData: OrderSheet = {
      ...orderDataFromCart,
      delivery: {
        ...data,
        address: `${data.address} ${data.addressDetail}`,
      },
    };

    //서버로 넘겨줘야 한다.
    showConfirm("주문하시겠습니까?", () =>
      order(orderData)
        .then((res) => {
          showAlert("주문이 처리되었습니다.");
          navigate("/orderlist");
        })
        .catch((res) => {
          showAlert("주문이 실패했습니다.");
        })
    );
  };

  return (
    <>
      <Title size="large">주문서 작성</Title>
      <CartStyle>
        <div className="content">
          <div className="order-info">
            <Title size="medium" color="text">
              배송 정보
            </Title>
            <form action="" className="delivery">
              <fieldset>
                <label>주소</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("address", { required: true })}
                  />
                </div>
                <FindAddressButton
                  onCompleted={(address) => {
                    setValue("address", address);
                  }}
                />
              </fieldset>
              {errors.address && (
                <p className="error-text">주소를 입력해주세요.</p>
              )}
              <fieldset>
                <label>상세 주소</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("addressDetail", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.address && (
                <p className="error-text">상세 주소를 입력해주세요.</p>
              )}
              <fieldset>
                <label>수령인</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("receiver", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.address && (
                <p className="error-text">수령인을 입력해주세요.</p>
              )}
              <fieldset>
                <label>전화번호</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("contact", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.address && (
                <p className="error-text">전화번호를 입력해주세요.</p>
              )}
            </form>
          </div>
          <div className="order-info">
            <Title size="medium" color="text">
              주문 상품
            </Title>
            <strong>
              {firstBookTitle} 등 총 {totalAmount} 권
            </strong>
          </div>
        </div>
        <div className="summary">
          <CartSummary totalAmount={totalAmount} totalPrice={totalPrice} />
          <Button
            size="large"
            schema="primary"
            onClick={handleSubmit(handlePay)}
          >
            결제하기
          </Button>
        </div>
      </CartStyle>
    </>
  );
}

const OrderStyle = styled.div``;
