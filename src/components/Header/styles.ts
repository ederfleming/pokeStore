import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto 0;
    background: ${theme.colors.primary};
    padding: 0 32px;
  `}
`

export const LogoContainer = styled.img`
  height: 80px;
  margin-right: 36px;
`

export const SearchBarComponent = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  border-radius: 8px;
  text-align: center;

  text-align: center;
  padding: 8px;
  margin: 16px 0;
`

export const Stores = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 36px;
`

export const StoresOptionsTitle = styled.span`
  display: block;
  font-size: 12px;
  text-align: center;
  color: #fff;
`

export const StoreButton = styled.div`
  display: flex;
  button {
    background: none;
    border: 0;
    padding: 6px;
    cursor: pointer;
    img {
      height: 24px;
    }
  }
`
