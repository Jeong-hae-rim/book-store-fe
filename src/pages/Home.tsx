import styled from "styled-components";

import { formatNumber } from "@/utils/format";

import { FaHeart } from "react-icons/fa";
import Title from "@/components/common/Title";
import Layout from "@/components/layout/Layout";
import Button from "@/components/common/Button";
import InputText from "@/components/common/InputText";

export default function Home() {
  return (
    <HomeStyle>
      <h1>Home</h1>
    </HomeStyle>
  );
}

const HomeStyle = styled.div``;
