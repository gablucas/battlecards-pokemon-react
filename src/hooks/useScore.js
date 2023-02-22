import React from 'react';

const useScore = (playerSelectedCard, setPlayerSelectedCard, computerSelectedCard, setComputerSelectedCard, setTurn) => {
  const [score, setScore] = React.useState({player: 0, computer: 0});
  const {card: playerCard, statIndex} = playerSelectedCard;
  const {card: computerCard} = computerSelectedCard;
  // console.log('Fora do useEffect: '+ playerCard, computerCard)

  React.useEffect(() => {
    
    if (playerCard && computerCard) {
      console.log('Dentro do useEffect: ' + playerCard, computerCard)
      setTimeout(() => {
        const playerStat = playerCard.stats[statIndex].base_stat;
        const computerStat = computerCard.stats[statIndex].base_stat;
        
        if (playerStat > computerStat) {
          setScore(scoreboard => ({...scoreboard, player: scoreboard.player + 1}))
          setTurn('Player');
          
        } else {
          setScore(scoreboard => ({...scoreboard, computer: scoreboard.computer + 1}))
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