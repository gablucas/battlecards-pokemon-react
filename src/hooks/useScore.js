import React from 'react';

const useScore = (playerSelectedCard, setPlayerSelectedCard, computerSelectedCard, setComputerSelectedCard, setTurn) => {
  const [score, setScore] = React.useState({total: 0, player: 0, computer: 0});

  const {card: playerCard, statIndex} = playerSelectedCard;
  const {card: computerCard} = computerSelectedCard;

  React.useEffect(() => {
    
    if (playerCard && computerCard) {

      setTimeout(() => {
        const playerStat = playerCard.stats[statIndex].base_stat;
        const computerStat = computerCard.stats[statIndex].base_stat;
        
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
  }, [computerCard, playerCard, setComputerSelectedCard, setPlayerSelectedCard, statIndex, setTurn])


  return score;
}

export {useScore}