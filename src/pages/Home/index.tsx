import { MdAddShoppingCart } from "react-icons/md";

import { Main, ProductList } from "./styles";
import { formatPrice } from "../../util/format";
import { useCart } from "../../hooks/useCart";
import { PokemonProps, usePokemon } from "../../hooks/usePokemon";
import Cart from "../Cart";
import { ChangeEvent, useEffect, useState } from "react";

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const { addPokemon, cart } = useCart();
  const { pokemons } = usePokemon();

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<PokemonProps[]>([]);

  const cartItemsAmount = cart.reduce((sumAmount, pokemon) => {
    sumAmount[pokemon.id] = pokemon.amount;
    return sumAmount;
  }, {} as CartItemsAmount);

  function handleAddPokemon(id: number) {
    addPokemon(id);
  }

  useEffect(() => {
    const filter = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filter);
  }, [search, pokemons]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  console.log("filt", filteredProducts);

  return (
    <Main>
      <ProductList>
        <div>
          <input
            value={search}
            placeholder={"Nome ou ID do pokemon"}
            onChange={handleChange}
          />
        </div>
        {filteredProducts.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <img src={pokemon.image} alt={pokemon.name} />
              <strong>{pokemon.name}</strong>
              <span>{formatPrice(pokemon.price)}</span>
              <button
                type="button"
                data-testid="add-product-button"
                onClick={() => handleAddPokemon(pokemon.id)}>
                <div data-testid="cart-product-quantity">
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {cartItemsAmount[pokemon.id] || 0}
                </div>

                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          );
        })}
      </ProductList>
      <Cart />
    </Main>
  );
};

export default Home;
