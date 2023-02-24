import React from 'react';
import { GlobalContext } from "../Components/Context";
import useUtilies from "../hooks/useUtilies";


const usePlayer = () => {
  const {playerCards, setPlayerCards, playerSelectedCard, setPlayerSelectedCard, computerSelectedCard, selectedStat, setSelectedStat, turn, setTurn} = React.useContext(GlobalContext)

  const { isObjectEmpty } = useUtilies();

  function PlayerTurn(id, statIndex) {
    if (!isObjectEmpty(playerSelectedCard) && !isObjectEmpty(computerSelectedCard) && turn === "Player") {
      setSelectedStat(statIndex)
      setPlayerSelectedCard(playerCards[id]);
      setPlayerCards(playerCards.filter((card, index) => index !== id));
      setTurn('Computer');

    } else if (!isObjectEmpty(playerSelectedCard) && isObjectEmpty(computerSelectedCard) && turn === "Player" && statIndex === selectedStat) {
      setPlayerSelectedCard(playerCards[id]);
      setPlayerCards(playerCards.filter((card, index) => index !== id));
      setTurn('Computer');
    }
  }
  return PlayerTurn;
}

export default usePlayer;