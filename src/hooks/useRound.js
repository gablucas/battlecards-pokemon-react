import React from 'react';

const useRound = (getCards, score) => {
  const [round, setRound] = React.useState(1);
  const [scoreRound, setScoreRound] = React.useState({player: 0, computer: 0})
  
  React.useEffect(() => {
    if (score.total !== 0 && score.total % 2 === 0) {
      if (score.player > score.computer) {
        setScoreRound(scoreRound => ({...scoreRound, player: scoreRound.player + 1}))
      } else if (score.computer > score.player) {
        setScoreRound(scoreRound => ({...scoreRound, computer: scoreRound.computer + 1}))
      } else {
        setScoreRound(scoreRound => ({ player: scoreRound.player + 1, computer: scoreRound.computer + 1}))
      }
    }

    if (score.total === 2 || (score.total !== 0 && score.total % 2 === 0 && score.player === score.computer)) {
      setRound(round => (round + 1));
      setTimeout(() => {
        getCards();
      }, 2000)
    }

  }, [getCards, score.total, score.computer, score.player])


  return {round, scoreRound}
}

export {useRound}