import { login, resetPassword, resetRequest, signUp } from "@/api/auth.api";
import { LoginProps } from "@/components/form/LoginForm";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { SignUpProps } from "@/components/form/SignUpForm";
import { useState } from "react";

export const useAuth = () => {
  const [resetRequested, setResetRequested] = useState(false);
  const { storeLogin, storeLogout, isloggedIn } = useAuthStore();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        //상태 변화
        storeLogin(res.token);

        showAlert("로그인이 성공했습니다.");
        navigate("/", { replace: true });
      },
      (error) => {
        showAlert("로그인이 실패했습니다.");
      }
    );
  };

  const userSignUp = (data: SignUpProps) => {
    signUp(data)
      .then((res) => {
        showAlert("회원가입이 완료되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        showAlert("회원가입이 실패했습니다.");
      });
  };

  const userResetRequest = (data: LoginProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  const userResetPassword = (data: LoginProps) => {
    resetPassword(data).then(() => {
      showAlert("비밀번호가 초기화되었습니다.");
      navigate("/login");
    });
  };

  return {
    userLogin,
    userSignUp,
    resetRequested,
    userResetRequest,
    userResetPassword,
  };
};
