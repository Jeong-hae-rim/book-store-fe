import { styled } from "styled-components";
import { ButtonScheme, ButtonSize } from "../../style/theme";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  $scheme: ButtonScheme;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  size,
  $scheme,
  disabled,
  isLoading,
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyle
      size={size}
      $scheme={$scheme}
      disabled={disabled}
      isLoading={isLoading}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<Omit<ButtonProps, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  color: ${({ theme, $scheme }) => theme.buttonScheme[$scheme].color};
  background-color: ${({ theme, $scheme }) =>
    theme.buttonScheme[$scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: pointer;
`;
