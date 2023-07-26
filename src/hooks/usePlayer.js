import React from 'react';
import { GlobalContext } from "../Components/Context";
import useUtilies from "../hooks/useUtilies";


const usePlayer = () => {
  const {playerCards, setPlayerCards, playerSelectedCard, setPlayerSelectedCard, computerSelectedCard, selectedStat, setSelectedStat, turn, setTurn, score} = React.useContext(GlobalContext)

  const { isObjectEmpty } = useUtilies();

  function PlayerTurn(id, statIndex, e) {
    const playerStat = playerCards[id].stats[statIndex].base_stat;
    let computerStat = computerSelectedCard.stats?.find((stat, index) => index === statIndex).base_stat || 0;


    if (!isObjectEmpty(playerSelectedCard) && !isObjectEmpty(computerSelectedCard) && turn === "Player") {
      setSelectedStat(statIndex)
      setPlayerSelectedCard(playerCards[id]);
      setPlayerCards(playerCards.filter((card, index) => index !== id));

      if (score.total.turn === 0 || computerStat > playerStat || !isObjectEmpty(computerSelectedCard)) {
        setTurn('Computer');
      }  

    } else if (!isObjectEmpty(playerSelectedCard) && isObjectEmpty(computerSelectedCard) && turn === "Player" && statIndex === selectedStat) {
      setPlayerSelectedCard(playerCards[id]);
      setPlayerCards(playerCards.filter((card, index) => index !== id));

      if (score.total.turn === 0 || computerStat > playerStat || !isObjectEmpty(computerSelectedCard)) {
        setTurn('Computer');
      }  
    }
    

 
}
  return PlayerTurn;
}

export default usePlayer;