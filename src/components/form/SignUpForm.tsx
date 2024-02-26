import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import InputText from "../common/InputText";
import { useAlert } from "../../hooks/useAlert";
import { useForm } from "react-hook-form";
import { signUp } from "../../api/auth.api";
import { styled } from "styled-components";

export interface SignUpProps {
  email: string;
  password: string;
}

export default function SignUpForm() {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>();

  const onSubmit = (data: SignUpProps) => {
    signUp(data)
      .then((res) => {
        showAlert("회원가입이 완료되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        showAlert("회원가입이 실패했습니다.");
      });
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
          <Button size="medium" $scheme="primary" type="submit">
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
