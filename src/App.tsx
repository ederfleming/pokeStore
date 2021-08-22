import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes/routes.routes";
import GlobalStyles from "./styles/global";
import { CartProvider } from "./hooks/useCart";
import { PokemonProvider } from "./hooks/usePokemon";
import { ThemeProvider } from "styled-components";
import { fire, leaf, water } from "styles/theme";
import { useState } from "react";
import Header from "components/Header";

const App = (): JSX.Element => {
  const [theme, setTheme] = useState("water");

  return (
    <ThemeProvider
      theme={theme === "fire" ? fire : theme === "leaf" ? leaf : water}>
      <BrowserRouter>
        <PokemonProvider>
          <CartProvider>
            <GlobalStyles />
            <Header setTheme={setTheme} />
            <Routes />
            <ToastContainer autoClose={3000} />
          </CartProvider>
        </PokemonProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
