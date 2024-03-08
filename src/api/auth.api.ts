import { requestHandler } from "@/api/http";
import { UserProps } from "@/hooks/useAuth";

export const signUp = async (userData: UserProps) => {
  return await requestHandler("post", "/users/join", userData);
};

export const resetRequest = async (data: UserProps) => {
  return await requestHandler("post", "/users/reset", data);
};

export const resetPassword = async (data: UserProps) => {
  return await requestHandler("put", "/users/reset", data);
};

export const login = async (data: UserProps) => {
  return await requestHandler<UserProps>("post", "/users/login", data);
};
