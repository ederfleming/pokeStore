import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { PokemonProps, usePokemon } from "./usePokemon";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdatePokemonsAmount {
  pokemonId: number;
  amount: number;
}

interface CartContextData {
  cart: PokemonProps[];
  addPokemon: (pokemonId: number) => Promise<void>;
  removePokemon: (pokemonId: number) => void;
  updatePokemonsAmount: ({ pokemonId, amount }: UpdatePokemonsAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const { pokemons } = usePokemon();
  const [cart, setCart] = useState<PokemonProps[]>(() => {
    const storagedCart = localStorage.getItem("@PokeStore:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addPokemon = async (pokemonId: number) => {
    try {
      let isProductInCart = false;
      let isProductInStock = true;

      const PokeAmount = pokemons.filter((pokemon) => pokemon.id === pokemonId);

      const updatedCart = cart.map((pokemon) => {
        if (pokemonId === pokemon.id) {
          isProductInCart = true;
          const newAmount = pokemon.amount + 1;
          if (PokeAmount[0].amount < newAmount) {
            isProductInStock = false;
            toast.error("Quantidade solicitada fora de estoque");
          } else {
            pokemon.amount = newAmount;
          }
        }
        return pokemon;
      });

      if (!isProductInCart) {
        const pokeResponse = pokemons.filter(
          (pokemon) => pokemon.id === pokemonId
        );

        updatedCart.push({ ...pokeResponse[0], amount: 1 });
      }
      if (isProductInStock) {
        setCart(updatedCart);
        localStorage.setItem("@PokeStore:cart", JSON.stringify(updatedCart));
      }
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removePokemon = async (pokemonId: number) => {
    try {
      const newCart = cart.filter((pokemon) => pokemon.id !== pokemonId);

      if (newCart.length === cart.length) {
        throw new Error();
      }

      setCart(newCart);
      localStorage.setItem("@PokeStore:cart", JSON.stringify(newCart));
    } catch {
      toast.error("Erro na remoção do produto");
      return;
    }
  };

  const updatePokemonsAmount = async ({
    pokemonId,
    amount,
  }: UpdatePokemonsAmount) => {
    try {
      if (amount <= 0) {
        return;
      }
      const pokeResponse = pokemons.filter(
        (pokemon) => pokemon.id === pokemonId
      );

      if (amount > pokeResponse[0].amount) {
        toast.error("Quantidade solicitada fora de estoque");
        return;
      }

      const updatedCart = cart.map((pokemon) => {
        if (pokemonId === pokemon.id) {
          if (pokeResponse[0].amount < amount) {
            toast.error("Quantidade solicitada fora de estoque");
          } else {
            pokemon.amount = amount;
          }
        }
        return pokemon;
      });
      localStorage.setItem("@PokeStore:cart", JSON.stringify(updatedCart));

      return setCart(updatedCart);
    } catch (err) {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addPokemon, removePokemon, updatePokemonsAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
