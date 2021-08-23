import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { CartProvider } from 'hooks/useCart'
import { PokemonProvider } from 'hooks/usePokemon'

import Header from 'components/Header'
import { ThemeProvider } from 'styled-components'

import Routes from 'routes/routes.routes'

import GlobalStyles from 'styles/global'
import { fire, leaf, water } from 'styles/theme'

const App = (): JSX.Element => {
  const [theme, setTheme] = useState('leaf')

  return (
    <ThemeProvider
      theme={theme === 'fire' ? fire : theme === 'leaf' ? leaf : water}
    >
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
  )
}

export default App
