import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import ContextProvider from "./Components/Context";
import { GlobalStyle } from "./global/styles";
import Menu from './Components/Menu/Container/index';
import Game from './Components/Game/Container/index';

function App() {

  return (
    <HashRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="game" element={<Game />} />
        </Routes>
        <GlobalStyle />
      </ContextProvider>
    </HashRouter>
  )
}

export default App;
