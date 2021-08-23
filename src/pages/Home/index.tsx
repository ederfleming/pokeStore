import { useState } from 'react'
import Modal from 'react-modal'

import { formatPrice } from 'util/format'

import { useCart } from 'hooks/useCart'
import { usePokemon } from 'hooks/usePokemon'

import CartList from 'components/CartList'
import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import OrderModal from 'components/OrderModal'
import PokemonCard from 'components/PokemonCard'

import Base from 'templates/Base'

import * as S from './styles'

Modal.setAppElement('#root')

const Home = (): JSX.Element => {
  const [hasTheOrderBeenFinalized, setHasTheOrderBeenFinalized] = useState(
    false
  )

  const { filteredPokemons } = usePokemon()
  const { clearCart, cart } = useCart()

  const total = cart.reduce(
    (sumTotal, pokemon) => pokemon.price * pokemon.amount + sumTotal,
    0
  )

  const cashBack = formatPrice(total * 0.05)

  function handleOpenOrderModal() {
    setHasTheOrderBeenFinalized(true)
  }
  function handleCloseOrderModal() {
    setHasTheOrderBeenFinalized(false)
    clearCart()
  }

  return (
    <Base>
      <S.Main>
        <section>
          {filteredPokemons.length !== 0 ? (
            <Grid>
              {filteredPokemons.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  price={pokemon.price}
                />
              ))}
            </Grid>
          ) : (
            <Empty
              title="Bem-vindo a PokeStore"
              description="Você pode escolher sua loja favorita clicando no menu superior"
            />
          )}
        </section>
        <S.CartWrapper>
          <CartList onOpenOrderModal={handleOpenOrderModal} />
        </S.CartWrapper>
      </S.Main>
      <OrderModal
        isOpen={hasTheOrderBeenFinalized}
        onRequestClose={handleCloseOrderModal}
        cashBack={cashBack}
      />
    </Base>
  )
}

export default Home
