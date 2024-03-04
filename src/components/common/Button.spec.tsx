import { logRoles, render, screen } from "@testing-library/react";

import { BookStoreThemeProvider } from "@/context/themeContext";
import Button from "@/components/common/Button";

describe("Title 컴포넌트 테스트", () => {
  it("렌더 확인", () => {
    //1. 렌더
    render(
      <BookStoreThemeProvider>
        <Button size="large" schema="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    //2. 확인
    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  it("size props 확인", async () => {
    //1. 렌더
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" schema="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    logRoles(container);

    //2. 확인
    const button = screen.getByRole("button", { name: "버튼" });

    expect(button).toHaveStyle({
      fontSize: "1.5rem",
    });
  });

  it("color props 확인", () => {
    //1. 렌더
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" schema="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    logRoles(container);

    //2. 확인
    const button = screen.getByRole("button", { name: "버튼" });
    expect(button).toHaveStyle({
      backgroundColor: "midnightblue",
    });
  });

  it("disabled props 확인", () => {
    //1. 렌더
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" schema="primary" disabled>
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    logRoles(container);

    //2. 확인
    const button = screen.getByRole("button", { name: "버튼" });
    expect(button).toHaveStyle({
      opacity: "0.5",
    });
  });
});
