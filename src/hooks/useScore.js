import React from 'react';
import { GlobalContext } from '../Components/Context';
import useUtilies from '../hooks/useUtilies';

const useScore = () => {
  const [score, setScore] = React.useState({total: 0, player: 0, computer: 0});
  const {playerSelectedCard, setPlayerSelectedCard, computerSelectedCard, setComputerSelectedCard, selectedStat, setTurn} = React.useContext(GlobalContext);
  const {isObjectEmpty} = useUtilies();

  React.useEffect(() => {
    
    if (isObjectEmpty(playerSelectedCard) && isObjectEmpty(computerSelectedCard)) {

      setTimeout(() => {
        const playerStat = playerSelectedCard.stats[selectedStat].base_stat;
        const computerStat = computerSelectedCard.stats[selectedStat].base_stat;
        
        if (playerStat > computerStat) {
          setScore(scoreboard => ({...scoreboard, total: scoreboard.total + 1, player: scoreboard.player + 1}))
          setTurn('Player');
          
        } else {
          setScore(scoreboard => ({...scoreboard, total: scoreboard.total + 1, computer: scoreboard.computer + 1}))
          setTurn('Computer');
        }
  
        setPlayerSelectedCard({});
        setComputerSelectedCard({});
      }, 3000)
    }
  }, [computerSelectedCard, playerSelectedCard, setComputerSelectedCard, setPlayerSelectedCard, setTurn, selectedStat, isObjectEmpty])


  return score;
}

export {useScore}