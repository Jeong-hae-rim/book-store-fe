import { Outlet } from "react-router-dom";

import Title from "@/components/common/Title";

export default function ResetPassword() {
  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
      <Outlet />
    </>
  );
}
