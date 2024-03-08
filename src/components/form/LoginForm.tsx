import { useForm } from "react-hook-form";

import { UserProps, useAuth } from "@/hooks/useAuth";

import Button from "@/components/common/Button";
import { SignUpStyle } from "@/components/form/SignUpForm";
import InputText from "@/components/common/InputText";

export default function LoginForm() {
  const { userLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>();

  const onSubmit = (data: UserProps) => {
    userLogin(data);
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
            로그인
          </Button>
        </fieldset>
      </form>
    </SignUpStyle>
  );
}
