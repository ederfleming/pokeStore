import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #DDD;
  }
.react-modal-overlay{
  background: rgba(0,0,0,0.8);
  position: fixed;

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  max-width: 550px;
  width: 100%;
  background: #DDD;
  padding: 3rem;
  position: relative;

  border-radius: 4px;
}
`

export default GlobalStyles
