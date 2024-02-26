import { styled } from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signUp } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import Layout from "../components/layout/Layout";

export default function SignUp() {
  return (
    <Layout>
      <Title size="large">회원가입</Title>
      <Outlet />
    </Layout>
  );
}
