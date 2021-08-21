import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  max-width: 130rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const LogoContainer = styled.img`
  height: 64px;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
