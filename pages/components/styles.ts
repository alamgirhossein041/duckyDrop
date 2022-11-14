import { ButtonProps } from "./Button";
import styled, { css } from "styled-components";

const COLOR = {
  primary: css`
    color: #fff;
    background: #54a9f7;
  `,
  light: css`
    color: #54a9f7;
    background: rgba(84, 169, 247, 0.12);
  `,
  dark: css`
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
  `,
};

const DISABLED = css`
  cursor: not-allowed;
`;

export const Container = styled.button<ButtonProps>`
  width: 220px;
  font-weight: 600;
  border-radius: 6px;
  padding: 16px;
  cursor: pointer;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;
