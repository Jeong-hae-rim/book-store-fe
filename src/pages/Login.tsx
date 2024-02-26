import Title from "../components/common/Title";
import { Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function Login() {
  return (
    <Layout>
      <Title size="large">Login</Title>
      <Outlet />
    </Layout>
  );
}
