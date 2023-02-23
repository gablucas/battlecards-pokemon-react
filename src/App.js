import React from "react";
import { Outlet } from "react-router-dom";
import ContextProvider from "./Components/Context";
import Header from "./Components/Header/Container";
import { GlobalStyle } from "./global/styles";


function App() {

  return (
    <>
      <ContextProvider>
        <Header />
        <Outlet />
        <GlobalStyle />
      </ContextProvider>
    </>
  )
}

export default App;
