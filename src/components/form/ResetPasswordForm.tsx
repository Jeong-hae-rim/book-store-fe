import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { resetPassword, resetRequest } from "@/api/auth.api";

import { useAlert } from "@/hooks/useAlert";

import Button from "@/components/common/Button";
import { SignUpStyle } from "@/components/form/SignUpForm";
import InputText from "@/components/common/InputText";

export interface SignUpProps {
  email: string;
  password: string;
}

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const [resetRequested, setResetRequested] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>();

  const onSubmit = (data: SignUpProps) => {
    if (resetRequested) {
      //초기화 요청 함수
      resetPassword(data).then(() => {
        showAlert("비밀번호가 초기화되었습니다.");
        navigate("/login");
      });
    } else {
      //요청 함수
      resetRequest(data).then(() => {
        setResetRequested(true);
      });
    }
  };

  return (
    <SignUpStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <InputText
            placeholder="이메일"
            inputType="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="error-text">이메일을 입력해 주세요.</p>
          )}
        </fieldset>

        {resetRequested && (
          <fieldset>
            <InputText
              placeholder="패스워드"
              inputType="current-password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="error-text">패스워드를 입력해 주세요.</p>
            )}
          </fieldset>
        )}
        <fieldset>
          <Button size="medium" schema="primary" type="submit">
            {resetRequested ? "비밀번호 초기화" : "비밀번호 초기화 요청"}
          </Button>
        </fieldset>
      </form>
    </SignUpStyle>
  );
}
