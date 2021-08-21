import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface PokemonProviderProps {
  children: ReactNode;
}

export interface PokemonProps {
  name: string;
  url: string;
  id: number;
  price: number;
  amount: number;
  image: string;
}

interface PokemonContextData {
  pokemons: PokemonProps[];
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData
);

export function PokemonProvider({
  children,
}: PokemonProviderProps): JSX.Element {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get(`/pokemon?limit=151`);

      const pokemonsFormated = response.data.results.map(
        (pokemon: PokemonProps, index: number) => ({
          ...pokemon,
          id: index + 1,
          price: Math.floor(Math.random() * 100 + 10),
          amount: 5,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        })
      );

      setPokemons(pokemonsFormated);
    }

    loadPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  return context;
}
