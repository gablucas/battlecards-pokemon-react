import React from 'react';
import { GlobalContext } from '../Components/Context';
import useUtilies from '../hooks/useUtilies';

const useScore = () => {
  const {score, setScore, playerSelectedCard, setPlayerSelectedCard, computerSelectedCard, setComputerSelectedCard, selectedStat, setTurn, setAnimate} = React.useContext(GlobalContext);
  const {isObjectEmpty} = useUtilies();

  React.useEffect(() => {
      
    if (isObjectEmpty(playerSelectedCard) && isObjectEmpty(computerSelectedCard)) {

      setTimeout(() => {
        const playerStat = playerSelectedCard.stats[selectedStat].base_stat;
        const computerStat = computerSelectedCard.stats[selectedStat].base_stat;
        
        if (playerStat > computerStat) {
          setScore(scoreboard => ({...scoreboard, total: {...scoreboard.total, turn: scoreboard.total.turn + 1}, player: {...scoreboard.player, turn: scoreboard.player.turn + 1}}))
          setTurn('Player');
          
        } else if (computerStat > playerStat) {
          setScore(scoreboard => ({...scoreboard, total: {...scoreboard.total, turn: scoreboard.total.turn + 1}, computer: {...scoreboard.computer, turn: scoreboard.computer.turn + 1}}))
          setTurn('Computer');
        } else {
          setTurn(turn => turn === 'Player' ? 'Computer' : 'Player')
        }

        setPlayerSelectedCard({});
        setComputerSelectedCard({});
        setAnimate(animate => ({...animate, computerStat: false}))
        
      }, 2000)
    }
  }, [computerSelectedCard, playerSelectedCard, setComputerSelectedCard, setPlayerSelectedCard, setTurn, setScore, selectedStat, isObjectEmpty, setAnimate])


  return score;
}

export {useScore}