import { FaHeart } from "react-icons/fa";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";
import Layout from "../components/layout/Layout";
import { formatNumber } from "../utils/format";
import styled from "styled-components";

export default function Home() {
  return (
    <Layout>
      <Title size="medium" color="background">
        제목 테스트
      </Title>
      <div>home body</div>
      <div>count: {formatNumber(1000)}</div>
      <ButtonStyle size="large" schema="like">
        <FaHeart />
        버튼 테스트
      </ButtonStyle>
      <InputText placeholder="여기에 입력하세요"></InputText>
    </Layout>
  );
}

const ButtonStyle = styled(Button)`
  svg {
    color: inherit;
  }
`;
