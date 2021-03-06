import { formatPrice } from 'util/format'

import { useCart } from 'hooks/useCart'

import Button from 'components/Button'

import * as S from './styles'

export type PokemonCardProps = {
  name: string
  id: number
  price: number
  image: string
}

const PokemonCard = ({ id, name, image, price }: PokemonCardProps) => {
  const { addPokemon } = useCart()

  function handleAddPokemon(id: number) {
    addPokemon(id)
  }
  return (
    <S.Wrapper>
      <S.PokemonItem>
        <img src={image} alt={name} />
        <S.PokemonName>{name}</S.PokemonName>
        <S.PokemonPrice>{formatPrice(price)}</S.PokemonPrice>
        <Button
          title="ADICIONAR AO CARRINHO"
          onClick={() => handleAddPokemon(id)}
        />
      </S.PokemonItem>
    </S.Wrapper>
  )
}

export default PokemonCard
