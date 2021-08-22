import * as S from "./styles";
import { usePokemon } from "../../hooks/usePokemon";
import Base from "templates/Base";
import PokemonCard from "components/PokemonCard";
import { Grid } from "components/Grid";
import CartList from "components/CartList";

const Home = (): JSX.Element => {
  const { filteredPokemons } = usePokemon();

  return (
    <Base>
      <S.Main>
        <section>
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
        </section>
        <S.CartWrapper>
          <CartList />
        </S.CartWrapper>
      </S.Main>
    </Base>
  );
};

export default Home;
