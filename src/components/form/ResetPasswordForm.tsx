import { useForm } from "react-hook-form";

import { UserProps, useAuth } from "@/hooks/useAuth";

import Button from "@/components/common/Button";
import { SignUpStyle } from "@/components/form/SignUpForm";
import InputText from "@/components/common/InputText";

export default function ResetPasswordForm() {
  const { resetRequested, userResetRequest, userResetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>();

  const onSubmit = (data: UserProps) => {
    resetRequested ? userResetRequest(data) : userResetPassword(data);
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
