import React from 'react';

export const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const cardsQuantity = 2;
  const [startGame, setStartGame] = React.useState(false);
  const [mode, setMode] = React.useState(null);
  const [difficult, setDifficult] = React.useState(null);
  const [selectedStat, setSelectedStat] = React.useState(null)
  const [turn, setTurn] = React.useState('Player');
  const [playerCards, setPlayerCards] = React.useState([])
  const [computerCards, setComputerCards] = React.useState([]);
  const [playerSelectedCard, setPlayerSelectedCard] = React.useState({});
  const [computerSelectedCard, setComputerSelectedCard] = React.useState({});
  const [score, setScore] = React.useState({total: {turn: 0, round: 0}, player: {turn: 0, round: 0}, computer: {turn: 0, round: 0}});
  const [round, setRound] = React.useState(1);
  const [finalGame, setFinalGame] = React.useState(false);
  const [animate, setAnimate] = React.useState({loseTurn: '', computerStat: false});

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
      round, setRound,
      finalGame, setFinalGame,
      score, setScore,
      animate, setAnimate,
       }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider;