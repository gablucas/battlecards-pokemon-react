import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Container";
import { GlobalStyle } from "./styles/global";


function App() {

  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyle />
    </>
  );
}

export default App;
