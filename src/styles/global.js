import { createGlobalStyle } from "styled-components";
import background from '../assets/bg/background.png';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    box-sizing: border-box;
  }
  
  body {
    max-width: 1920px;
    margin: 0 auto;
    -webkit-font-smoothing: antialised;
    width: 100%;
    background: url(${background}) center no-repeat;
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