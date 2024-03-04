import { useEffect } from "react";
import { styled } from "styled-components";

import Button from "@/components/common/Button";

interface Props {
  onCompleted: (address: string) => void;
}

const SCRIPT_URL =
  "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

export default function FindAddressButton({ onCompleted }: Props) {
  //핸들러
  const handleOpen = () => {
    new window.daum.Postcode({
      onComplete: (data: any) => {
        onCompleted(data.address as string);
      },
    }).open();
  };

  //스크립트 로드
  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);

    //FindAddressButton이 사라지면
    return () => {
      //head에서 script를 제거하겠다
      document.head.removeChild(script);
    };
  }, []);

  //입력

  return (
    <FindAddressButtonStyle>
      <Button type="button" size="medium" schema="normal" onClick={handleOpen}>
        주소 찾기
      </Button>
    </FindAddressButtonStyle>
  );
}

const FindAddressButtonStyle = styled.div``;
