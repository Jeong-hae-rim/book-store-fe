import { requestHandler } from "@/api/http";
import { SignUpProps } from "@/components/form/SignUpForm";

export const signUp = async (userData: SignUpProps) => {
  return await requestHandler("post", "/users/join", userData);
};

export const resetRequest = async (data: SignUpProps) => {
  return await requestHandler("post", "/users/reset", data);
};

export const resetPassword = async (data: SignUpProps) => {
  return await requestHandler("put", "/users/reset", data);
};

export const login = async (data: SignUpProps) => {
  return await requestHandler<SignUpProps>("post", "/users/login", data);
};
