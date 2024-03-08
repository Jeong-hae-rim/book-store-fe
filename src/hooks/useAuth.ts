import { login, resetPassword, resetRequest, signUp } from "@/api/auth.api";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "@/hooks/useAlert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export interface UserProps {
  email: string;
  password: string;
  token?: string;
}

export const useAuth = () => {
  const [resetRequested, setResetRequested] = useState(false);
  const { storeLogin, storeLogout, isloggedIn } = useAuthStore();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const userLogin = (data: UserProps) => {
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

  const userSignUp = (data: UserProps) => {
    signUp(data)
      .then((res) => {
        showAlert("회원가입이 완료되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        showAlert("회원가입이 실패했습니다.");
      });
  };

  const userResetRequest = (data: UserProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  const userResetPassword = (data: UserProps) => {
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
