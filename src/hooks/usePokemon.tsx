import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { api } from 'services/api'

interface PokemonProviderProps {
  children: ReactNode
}

export interface PokemonProps {
  name: string
  url: string
  id: number
  price: number
  amount: number
  image: string
}

interface PokemonContextData {
  pokemons: PokemonProps[]
  generation: PokemonProps[]
  generationId: number
  filteredPokemons: PokemonProps[]
  search: string
  setSearch: (poke: string) => void
  selectGeneration: (value: number) => void
  setGenerationId: (value: number) => void
}

export const PokemonContextDefaultValues = {
  pokemons: [],
  generation: [],
  generationId: 1,
  filteredPokemons: [],
  search: '',
  setSearch: () => null,
  selectGeneration: () => null,
  setGenerationId: () => null
}

const PokemonContext = createContext<PokemonContextData>(
  PokemonContextDefaultValues
)

export function PokemonProvider({
  children
}: PokemonProviderProps): JSX.Element {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const [search, setSearch] = useState('')
  const [generationId, setGenerationId] = useState<number>(1)
  const [generation, setGeneration] = useState<PokemonProps[]>([])
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonProps[]>([])

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get(`pokemon?limit=386`)

      const pokemonsFormated = response.data.results.map(
        (pokemon: PokemonProps, index: number) => ({
          ...pokemon,
          id: index + 1,
          price: Math.floor(Math.random() * 100 + 10),
          amount: 5,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`
        })
      )

      setPokemons(pokemonsFormated)
    }

    loadPokemons()
  }, [setPokemons])

  const selectGeneration = (value: number) => {
    setGeneration(
      value === 1
        ? pokemons.slice(0, 151)
        : value === 2
        ? pokemons.slice(151, 251)
        : pokemons.slice(251)
    )
  }

  useEffect(() => {
    const filteredPokes = generation.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredPokemons(filteredPokes)
  }, [search, generation])

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        generation,
        generationId,
        filteredPokemons,
        search,
        setSearch,
        selectGeneration,
        setGenerationId
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext)

  return context
}
