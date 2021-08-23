import styled, { css } from 'styled-components'

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ModalCloseButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;
  border: 0;
  background: transparent;
  cursor: pointer;
`
export const ModalTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: ${theme.colors.primary};
  `}
`
export const ModalDescription = styled.p`
  ${({ theme }) => css`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${theme.colors.black};
  `}
`
export const ModalCashback = styled.span`
  ${({ theme }) => css`
    font-size: 2.5rem;
    font-weight: bold;
    color: ${theme.colors.primary};
  `}
`
