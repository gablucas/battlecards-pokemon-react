import React from 'react';

export const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState(null);
  const [difficult, setDifficult] = React.useState(null);
  const [startGame, setStartGame] = React.useState(false);
  const [selectedStat, setSelectedStat] = React.useState(null)
  const [turn, setTurn] = React.useState('Player');
  const [playerCards, setPlayerCards] = React.useState([])
  const [computerCards, setComputerCards] = React.useState([]);
  const [playerSelectedCard, setPlayerSelectedCard] = React.useState({});
  const [computerSelectedCard, setComputerSelectedCard] = React.useState({});

  return (
    <GlobalContext.Provider value={{
      playerCards, setPlayerCards,
      computerCards, setComputerCards,
      playerSelectedCard,setPlayerSelectedCard,
      computerSelectedCard, setComputerSelectedCard,
      mode, setMode, 
      difficult, setDifficult, 
      startGame, setStartGame, 
      selectedStat, setSelectedStat, 
      turn, setTurn,
       }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider;