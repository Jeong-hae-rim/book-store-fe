import { Outlet } from "react-router-dom";

import Title from "@/components/common/Title";

export default function SignUp() {
  return (
    <>
      <Title size="large">회원가입</Title>
      <Outlet />
    </>
  );
}
