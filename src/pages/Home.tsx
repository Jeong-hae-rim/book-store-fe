import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";
import Layout from "../components/layout/Layout";
import { formatNumber } from "../utils/format";

export default function Home() {
  return (
    <Layout>
      <Title size="medium" color="background">
        제목 테스트
      </Title>
      <div>home body</div>
      <div>count: {formatNumber(1000)}</div>
      <Button size="large" $scheme="normal">
        버튼 테스트
      </Button>
      <InputText placeholder="여기에 입력하세요"></InputText>
    </Layout>
  );
}
