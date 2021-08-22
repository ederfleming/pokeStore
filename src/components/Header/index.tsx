import { ChangeEvent } from "react";

import logo from "../../assets/images/pokestore.png";
import badgeFogo from "../../assets/images/fogo.png";
import badgeAgua from "../../assets/images/badge.png";
import badgeCristal from "../../assets/images/badge2.png";
import * as S from "./styles";
import { usePokemon } from "hooks/usePokemon";

interface HeaderProps {
  setTheme: (theme: string) => void;
}

const Header = ({ setTheme }: HeaderProps): JSX.Element => {
  const { search, setSearch, selectGeneration, setGenerationId } = usePokemon();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSelectGeneration = (value: number) => {
    setGenerationId(value);
    selectGeneration(value);
    setTheme(value === 1 ? "fire" : value === 2 ? "leaf" : "water");
  };

  return (
    <S.Container>
      <S.LogoContainer src={logo} alt="PokeStore" />

      <S.SearchBarComponent
        value={search}
        placeholder={"Nome do pokemon"}
        onChange={handleChange}
      />

      <S.Stores>
        <div>
          <S.StoresOptionsTitle>Escolha sua loja favorita</S.StoresOptionsTitle>
        </div>
        <S.StoreButton>
          <button type="button" onClick={() => handleSelectGeneration(1)}>
            <img src={badgeFogo} alt="Loja do Fogo" />
          </button>
          <button type="button" onClick={() => handleSelectGeneration(2)}>
            <img src={badgeAgua} alt="Loja da Agua" />
          </button>
          <button type="button" onClick={() => handleSelectGeneration(3)}>
            <img src={badgeCristal} alt="Loja do Cristal" />
          </button>
        </S.StoreButton>
      </S.Stores>
    </S.Container>
  );
};

export default Header;
