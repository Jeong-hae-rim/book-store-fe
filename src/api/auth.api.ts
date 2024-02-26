import { SignUpProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signUp = async (userData: SignUpProps) => {
  const response = await httpClient.post("/users/join", userData);

  return response.data;
};
