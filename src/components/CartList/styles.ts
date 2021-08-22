import styled, { css } from "styled-components";
import { lighten } from "polished";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 12px;
    background: ${theme.colors.white};
    border-radius: 4px;
  `}
`;

export const ProductTable = styled.div``;

export const CartListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const CartListHeaderTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray}
    text-align: left;
    padding: 12px;
  `}
`;

export const CartListItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ItemImage = styled.img`
  height: 50px;
`;
export const ItemDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    strong {
      color:${theme.colors.gray}
      display: block;
      font-size: 12px;
      text-transform: capitalize;
    }

    span {
      display: block;
      margin-top: 5px;
      font-size: 12px;
      font-weight: bold;
    }
  `}
`;

export const ItemAmount = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: ${theme.colors.darkGray};
      padding: 6px;
      width: 30px;
    }
    button {
      background: none;
      border: 0;
      padding: 6px;

      svg {
        color: ${theme.colors.primary};
        transition: color 0.2s;
      }

      &:disabled {
        svg {
          color: ${lighten(0.25, theme.colors.primary)};
          cursor: not-allowed;
        }
      }
    }
  `}
`;

export const ItemPrice = styled.div`
  ${({ theme }) => css`
    strong {
      color: ${theme.colors.darkGray};
      display: block;
      font-size: 12px;
    }
  `}
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteIcon = styled.div`
  ${({ theme }) => css`
    button {
      background: none;
      border: 0;
      padding: 6px;

      svg {
        color: ${theme.colors.primary};
        transition: color 0.2s;
      }

      &:hover {
        svg {
          color: ${theme.colors.secondary};
        }
      }
    }
  `}
`;

export const Total = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 18px;
    margin-left: 5px;
  }
`;
