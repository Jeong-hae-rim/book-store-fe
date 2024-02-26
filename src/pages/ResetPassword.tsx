import Title from "../components/common/Title";
import { Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function ResetPassword() {
  return (
    <Layout>
      <Title size="large">비밀번호 초기화</Title>
      <Outlet />
    </Layout>
  );
}
