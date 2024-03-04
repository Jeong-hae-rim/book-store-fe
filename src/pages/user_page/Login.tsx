import { Outlet } from "react-router-dom";

import Title from "@/components/common/Title";

export default function Login() {
  return (
    <>
      <Title size="large">Login</Title>
      <Outlet />
    </>
  );
}
