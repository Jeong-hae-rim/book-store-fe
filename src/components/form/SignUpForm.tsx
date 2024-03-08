import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";

import { UserProps, useAuth } from "@/hooks/useAuth";

import Button from "@/components/common/Button";
import InputText from "@/components/common/InputText";

export default function SignUpForm() {
  const { userSignUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>();

  const onSubmit = (data: UserProps) => {
    userSignUp(data);
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
        <fieldset>
          <Button size="medium" schema="primary" type="submit">
            회원가입
          </Button>
        </fieldset>
        <div className="info">
          <Link to="/reset">비밀번호 초기화</Link>
        </div>
      </form>
    </SignUpStyle>
  );
}

export const SignUpStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.width.small};
  margin: 80px auto;

  fieldset {
    border: 0;
    padding: 0 0 8px 0;
    .error-text {
      color: red;
    }
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
  }

  .info {
    text-align: center;
    padding: 16px 0 0 0;
  }
`;
