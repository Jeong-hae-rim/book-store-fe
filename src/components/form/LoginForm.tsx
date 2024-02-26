import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import InputText from "../common/InputText";
import { useAlert } from "../../hooks/useAlert";
import { useForm } from "react-hook-form";
import { login } from "../../api/auth.api";
import { SignUpStyle } from "./SignUpForm";

export interface SignUpProps {
  email: string;
  password: string;
}

export default function LoginForm() {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>();

  const onSubmit = (data: SignUpProps) => {
    login(data).then((res) => {
      console.log(res.token);
      showAlert("로그인이 성공했습니다.");
      navigate("/");
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
            로그인
          </Button>
        </fieldset>
      </form>
    </SignUpStyle>
  );
}