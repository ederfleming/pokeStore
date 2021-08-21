import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes/routes.routes";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import { CartProvider } from "./hooks/useCart";
import { PokemonProvider } from "./hooks/usePokemon";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PokemonProvider>
          <CartProvider>
            <GlobalStyles />
            <Header />
            <Routes />
            <ToastContainer autoClose={3000} />
          </CartProvider>
        </PokemonProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
