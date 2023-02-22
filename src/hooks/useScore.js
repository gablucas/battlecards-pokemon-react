import React from 'react';

const useScore = (playerSelectedCard, setPlayerSelectedCard, computerSelectedCard, setComputerSelectedCard) => {
  const [score, setScore] = React.useState({player: 0, computer: 0});
  const {card: playerCard, statIndex} = playerSelectedCard;
  const {card: computerCard} = computerSelectedCard;

  React.useEffect(() => {

    if (playerCard && computerCard) {
      setTimeout(() => {
        const playerStat = statIndex !== 6 ? playerCard.stats[statIndex].base_stat : playerCard.weight;
        const computerStat = statIndex !== 6 ? computerCard.stats[statIndex].base_stat : computerCard.weight;
        
        if (playerStat > computerStat) {
          setScore(scoreboard => ({...scoreboard, player: scoreboard.player + 1}))
        } else {
          setScore(scoreboard => ({...scoreboard, computer: scoreboard.computer + 1}))
        }
  
        setPlayerSelectedCard({});
        setComputerSelectedCard({});
      }, 3000)
    }
  }, [computerCard, playerCard, setComputerSelectedCard, setPlayerSelectedCard, statIndex])


  return score;
}

export {useScore}