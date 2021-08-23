import Store from 'assets/images/pokestore.png'

import * as S from './styles'

export type EmpyProps = {
  title: string
  description: string
}

const Empty = ({ title, description }: EmpyProps) => (
  <S.Wrapper>
    <S.Image
      src={Store}
      alt="A gamer in a couch playing videogame"
      role="image"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Empty
