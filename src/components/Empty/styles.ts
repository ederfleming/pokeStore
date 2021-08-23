import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const Image = styled.img`
  max-width: 100%;
  max-height: 20rem;
`
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 3rem;
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 2rem;
    font-weight: 300;
    margin-bottom:1rem};
  `}
`
