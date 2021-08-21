import React from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { useCart } from "../../hooks/useCart";

import { PokemonProps } from "../../hooks/usePokemon";
import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total } from "./styles";

const Cart = (): JSX.Element => {
  const { cart, updatePokemonsAmount, removePokemon } = useCart();

  const total = formatPrice(
    cart.reduce(
      (sumTotal, pokemon) => pokemon.price * pokemon.amount + sumTotal,
      0
    )
  );

  function handleProductIncrement(pokemon: PokemonProps) {
    const incrementAmount = pokemon.amount + 1;
    return updatePokemonsAmount({
      pokemonId: pokemon.id,
      amount: incrementAmount,
    });
  }

  function handleProductDecrement(pokemon: PokemonProps) {
    const discrementAmount = pokemon.amount - 1;
    return updatePokemonsAmount({
      pokemonId: pokemon.id,
      amount: discrementAmount,
    });
  }

  function handleRemovePokemon(pokemonId: number) {
    removePokemon(pokemonId);
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cart.map((pokemon) => {
            return (
              <tr key={pokemon.id} data-testid="product">
                <td>
                  <img src={pokemon.image} alt={pokemon.name} />
                </td>
                <td>
                  <strong>{pokemon.name}</strong>
                  <span>{formatPrice(pokemon.price)}</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      data-testid="decrement-product"
                      disabled={pokemon.amount <= 1}
                      onClick={() => handleProductDecrement(pokemon)}>
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
                      onClick={() => handleProductIncrement(pokemon)}>
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{formatPrice(pokemon.price * pokemon.amount)}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="remove-product"
                    onClick={() => handleRemovePokemon(pokemon.id)}>
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
