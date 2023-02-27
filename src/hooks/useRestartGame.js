import React from 'react';
import { GlobalContext } from '../Components/Context';
import { useStartgame } from './useStartgame';


const useRestartGame = () => {
  const { setStartGame, setMode, setDifficult, setScore, setRound, setFinalGame } = React.useContext(GlobalContext)
  const getCards = useStartgame();

  function restartMatch() {
    setScore({total: {turn: 0, round: 0}, player: {turn: 0, round: 0}, computer: {turn: 0, round: 0}});
    setRound(0);
    setFinalGame(false);
    getCards();
  }

  function restartGame() {
    setStartGame(false);
    setMode(null);
    setDifficult(null);
    setScore({total: {turn: 0, round: 0}, player: {turn: 0, round: 0}, computer: {turn: 0, round: 0}});
    setRound(0);
    setFinalGame(false);
  }

return {restartMatch, restartGame}

}

export default useRestartGame