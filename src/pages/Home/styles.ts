import { Container } from '../../components/Container'
import styled, { css } from 'styled-components'

export const Main = styled(Container)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: ${theme.grid.gutter};
  `}
`

export const CartWrapper = styled.div`
  margin-top: 32px;
`
