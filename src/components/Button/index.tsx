import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  title: string;
} & ButtonTypes;
const Button = ({ title, onClick }: ButtonProps): JSX.Element => {
  return (
    <S.StyledButton type="button" onClick={onClick}>
      {title}
    </S.StyledButton>
  );
};

export default Button;
