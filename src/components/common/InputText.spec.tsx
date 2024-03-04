import React from "react";
import { render, screen } from "@testing-library/react";

import { BookStoreThemeProvider } from "@/context/themeContext";
import InputText from "@/components/common/InputText";

describe("Title 컴포넌트 테스트", () => {
  it("렌더 확인", () => {
    //1. 렌더
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력" />
      </BookStoreThemeProvider>
    );

    //2. 확인
    expect(screen.getByPlaceholderText("여기에 입력")).toBeInTheDocument();
  });

  it("forwardRef 확인", () => {
    //1. 렌더
    const ref = React.createRef<HTMLInputElement>();

    render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력" ref={ref} />
      </BookStoreThemeProvider>
    );

    //2. 확인
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
