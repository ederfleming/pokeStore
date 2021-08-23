import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline
} from 'react-icons/md'

import { formatPrice } from 'util/format'

import { useCart } from 'hooks/useCart'
import { PokemonProps } from 'hooks/usePokemon'

import Button from 'components/Button'

import * as S from './styles'

interface CartLiatProps {
  onOpenOrderModal: () => void
}

const CartList = ({ onOpenOrderModal }: CartLiatProps): JSX.Element => {
  const { cart, updatePokemonsAmount, removePokemon } = useCart()

  const total = formatPrice(
    cart.reduce(
      (sumTotal, pokemon) => pokemon.price * pokemon.amount + sumTotal,
      0
    )
  )

  function handleProductIncrement(pokemon: PokemonProps) {
    const incrementAmount = pokemon.amount + 1
    return updatePokemonsAmount({
      pokemonId: pokemon.id,
      amount: incrementAmount
    })
  }

  function handleProductDecrement(pokemon: PokemonProps) {
    const discrementAmount = pokemon.amount - 1
    return updatePokemonsAmount({
      pokemonId: pokemon.id,
      amount: discrementAmount
    })
  }

  function handleRemovePokemon(pokemonId: number) {
    removePokemon(pokemonId)
  }

  return (
    <S.Wrapper>
      <S.ProductTable>
        <S.CartListHeader>
          <S.CartListHeaderTitle>Seus Pokemons</S.CartListHeaderTitle>
        </S.CartListHeader>

        {cart.map((pokemon) => {
          return (
            <S.CartListItem key={pokemon.id}>
              <S.ItemImage src={pokemon.image} alt={pokemon.name} />
              <S.ItemDescription>
                <strong>{pokemon.name}</strong>
                <span>{formatPrice(pokemon.price)}</span>
              </S.ItemDescription>
              <S.ItemAmount>
                <button
                  type="button"
                  data-testid="decrement-product"
                  disabled={pokemon.amount <= 1}
                  onClick={() => handleProductDecrement(pokemon)}
                >
                  <MdRemoveCircleOutline size={20} />
                </button>
                <input
                  type="text"
                  data-testid="product-amount"
                  readOnly
                  value={pokemon.amount}
                />
                <button
                  type="button"
                  data-testid="increment-product"
                  onClick={() => handleProductIncrement(pokemon)}
                >
                  <MdAddCircleOutline size={20} />
                </button>
              </S.ItemAmount>
              <S.ItemPrice>
                <strong>{formatPrice(pokemon.price * pokemon.amount)}</strong>
              </S.ItemPrice>
              <S.DeleteIcon>
                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={() => handleRemovePokemon(pokemon.id)}
                >
                  <MdDelete size={20} />
                </button>
              </S.DeleteIcon>
            </S.CartListItem>
          )
        })}
      </S.ProductTable>

      <S.Footer>
        <S.Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </S.Total>

        <Button
          title="Finalizar pedido"
          disabled={cart.length === 0}
          onClick={onOpenOrderModal}
        />
      </S.Footer>
    </S.Wrapper>
  )
}

export default CartList
