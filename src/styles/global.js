import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    box-sizing: border-box;
  }
  
  body {
    margin: 0 auto;
    -webkit-font-smoothing: antialised;
  }
  
  button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-height: 100%;
    display: block;
  }
`