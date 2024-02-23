import Button from "../components/common/Button";
import Title from "../components/common/Title";
import { formatNumber } from "../utils/format";

export default function Home() {
  return (
    <>
      <Title size="medium" color="background">
        제목 테스트
      </Title>
      <div>home body</div>
      <div>count: {formatNumber(1000)}</div>
      <Button size="large" scheme="normal">
        버튼 테스트
      </Button>
    </>
  );
}
