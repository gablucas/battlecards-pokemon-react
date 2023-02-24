import React from 'react';
import { GlobalContext } from '../Components/Context';
import { useStartgame } from './useStartgame';

const useRound = () => {
  const {cardsQuantity, score, setScore} = React.useContext(GlobalContext);
  const [round, setRound] = React.useState(1);
  const getCards = useStartgame();
  
  React.useEffect(() => {

    if (score.total.turn !== 0 && score.total.turn % cardsQuantity === 0) {
    
      if (score.player.turn > score.computer.turn) {
        setScore(scoreboard => ({...scoreboard, total: {turn: 0, round: scoreboard.total.round + 1}, player: {turn: 0, round: scoreboard.player.round + 1}}))
      } else if (score.computer.turn > score.player.turn) {
        setScore(scoreboard => ({...scoreboard, total: {turn: 0, round: scoreboard.total.round + 1}, computer: {turn: 0, round: scoreboard.computer.round + 1}}))
      } 
    }

  }, [cardsQuantity, setScore, score.total, score.computer, score.player])


  React.useEffect(() => {
    if ((score.total.round > 0 && score.total.round <= 1) || (score.total.round > 0 && score.player.round === score.computer.round)) {
      setRound(round => round + 1);
      setTimeout(() => {
        getCards();
      }, 2000)
    }
  }, [getCards, score.total.round, score.player.round, score.computer.round])

  return {round}
}

export {useRound}