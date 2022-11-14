import { Container } from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  type?: string;
  color?: "primary" | "light" | "dark";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  onClick,
  children,
  disabled,
  color = "primary",
}: ButtonProps) => {
  return (
    <Container color={color} disabled={disabled} onClick={onClick}>
      {children}
    </Container>
  );
};
