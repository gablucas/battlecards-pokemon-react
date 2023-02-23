import React from 'react';

export const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState(null);
  const [difficult, setDifficult] = React.useState(null);
  const [startGame, setStartGame] = React.useState(false);

  return (
    <GlobalContext.Provider value={{ mode, setMode, difficult, setDifficult, startGame, setStartGame }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider;