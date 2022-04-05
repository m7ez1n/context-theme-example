import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  
  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  body {
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
