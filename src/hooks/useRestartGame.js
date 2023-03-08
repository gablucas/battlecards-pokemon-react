import React from 'react';
import { GlobalContext } from '../Components/Context';
import { useStartgame } from './useStartgame';


const useRestartGame = () => {
  const { setStartGame, setDifficult, setScore, setRound, setAnimate } = React.useContext(GlobalContext)
  const { getCards } = useStartgame();

  function restartMatch() {
    setScore({total: {turn: 0, round: 0}, player: {turn: 0, round: 0}, computer: {turn: 0, round: 0}});
    setRound(0);
    setAnimate(animate => ({ ...animate, finalGame: false }))
    getCards();
  }

  function restartGame() {
    setStartGame(false);
    setDifficult(null);
    setScore({total: {turn: 0, round: 0}, player: {turn: 0, round: 0}, computer: {turn: 0, round: 0}});
    setRound(0);
    setAnimate(animate => ({ ...animate, finalGame: false }))
  }

return {restartMatch, restartGame}

}

export default useRestartGame