import React from 'react';

export const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const cardsQuantity = 7;
  const [startGame, setStartGame] = React.useState(false);
  const [mode, setMode] = React.useState(null);
  const [difficult, setDifficult] = React.useState(null);
  const [selectedStat, setSelectedStat] = React.useState(null)
  const [turn, setTurn] = React.useState('Computer');
  const [playerCards, setPlayerCards] = React.useState([])
  const [computerCards, setComputerCards] = React.useState([]);
  const [playerSelectedCard, setPlayerSelectedCard] = React.useState({});
  const [computerSelectedCard, setComputerSelectedCard] = React.useState({});
  const [animate, setAnimate] = React.useState(false);

  return (
    <GlobalContext.Provider value={{
      cardsQuantity,
      playerCards, setPlayerCards,
      computerCards, setComputerCards,
      playerSelectedCard,setPlayerSelectedCard,
      computerSelectedCard, setComputerSelectedCard,
      mode, setMode, 
      difficult, setDifficult, 
      startGame, setStartGame, 
      selectedStat, setSelectedStat, 
      turn, setTurn,
      animate, setAnimate,
       }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider;