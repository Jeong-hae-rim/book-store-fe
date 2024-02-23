import { styled } from "styled-components";

export default function Header() {
  return (
    <HeaderStyle>
      <header>
        <h1>book store</h1>
      </header>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.color.background};

  h1 {
    color: ${({ theme }) => theme.color.primary};
  }
`;
