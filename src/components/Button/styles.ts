import styled, { css } from "styled-components";
import { darken } from "polished";

export const StyledButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 8px;
    background: ${theme.colors.primary};
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    justify-content: center;
    text-transform: uppercase;
    transition: background 0.2s e;

    &:hover {
      background: ${darken(0.06, theme.colors.primary)};
    }
  `}
`;
