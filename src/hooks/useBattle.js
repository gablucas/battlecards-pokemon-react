import React from "react";
import { GlobalContext } from "../Components/Context";
import { useComputer } from "./useComputer";
import useUtilies from "../hooks/useUtilies";

const useBattle = () => {
  const { computerCards, setComputerCards, computerSelectedCard, setComputerSelectedCard, playerSelectedCard, setSelectedStat, turn, setTurn, difficult, setAnimate } = React.useContext(GlobalContext);
  const { playFirst, playLater } = useComputer();
  const { isObjectEmpty } = useUtilies();

  React.useEffect(() => {
    if (turn === 'Computer' && isObjectEmpty(playerSelectedCard) && !isObjectEmpty(computerSelectedCard)) {
      
      let computerCard = playLater[difficult]();
      if (difficult === 'human') {
        computerCard = computerCard();
      }

      
      setTimeout(() => {
        setComputerSelectedCard(computerCards[computerCard])
        setComputerCards(computerCards.filter((card, index) => index !== computerCard))
      }, 2000)
      
    } else if (turn === "Computer" && computerCards.length && !isObjectEmpty(playerSelectedCard) && !isObjectEmpty(computerSelectedCard)) {
      let computerCard = playFirst[difficult]();
      if (difficult === 'human') {
        computerCard = computerCard();
      }
      
      setTimeout(() => {
        setSelectedStat(computerCard.statIndex)
        setComputerSelectedCard(computerCards[computerCard.cardIndex])
        setComputerCards(computerCards.filter((card, index) => index !== computerCard.cardIndex))
        setTurn('Player');
        setAnimate(animate => ({...animate, computerStat: true}));
      }, 3000)
    }

  }, [playerSelectedCard ,computerCards, setComputerCards, computerSelectedCard, setComputerSelectedCard, turn, setTurn, setSelectedStat, isObjectEmpty, difficult, playFirst, playLater, setAnimate])

}

export {useBattle}