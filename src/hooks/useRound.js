import React from 'react';
import { GlobalContext } from '../Components/Context';
import { useStartgame } from './useStartgame';

const useRound = (score) => {
  const {cardsQuantity} = React.useContext(GlobalContext);
  const [round, setRound] = React.useState(1);
  const [scoreRound, setScoreRound] = React.useState({player: 0, computer: 0})
  const getCards = useStartgame();
  
  React.useEffect(() => {
    if (score.total !== 0 && score.total % cardsQuantity === 0) {
      if (score.player > score.computer) {
        setScoreRound(scoreRound => ({...scoreRound, player: scoreRound.player + 1}))
      } else if (score.computer > score.player) {
        setScoreRound(scoreRound => ({...scoreRound, computer: scoreRound.computer + 1}))
      } else {
        setScoreRound(scoreRound => ({ player: scoreRound.player + 1, computer: scoreRound.computer + 1}))
      }
    }

    if (score.total === cardsQuantity || (score.total !== 0 && score.total % cardsQuantity === 0 && score.player === score.computer)) {
      setRound(round => (round + 1));
      setTimeout(() => {
        getCards();
      }, 2000)
    }

  }, [cardsQuantity, getCards, score.total, score.computer, score.player])


  return {round, scoreRound}
}

export {useRound}