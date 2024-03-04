import { Outlet } from "react-router-dom";

import Title from "@/components/common/Title";
import Layout from "@/components/layout/Layout";

export default function SignUp() {
  return (
    <Layout>
      <Title size="large">회원가입</Title>
      <Outlet />
    </Layout>
  );
}
