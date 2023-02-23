import React from "react";
import { GlobalContext } from "../Components/Context";
import useUtilies from "../hooks/useUtilies";

const useComputer = () => {
  const {computerCards, setComputerCards ,playerSelectedCard, computerSelectedCard, setComputerSelectedCard, difficult, selectedStat, setSelectedStat, turn, setTurn} = React.useContext(GlobalContext)
  const { isObjectEmpty } = useUtilies();

  React.useEffect(() => {
    let computerID;
    let computerIndex;

    
    if (turn === 'Computer' && isObjectEmpty(playerSelectedCard) && !isObjectEmpty(computerSelectedCard)) {
      // Escolhe uma carta de forma aleatória
      if (difficult === 'Easy') {
        computerID = Math.floor(Math.random() * computerCards.length);

      } else if (difficult === "Medium") {
        // Escolhe a carta mais forte do que o adversário (Escolhe aleatoriamente uma das mais fortes), se não houver, escolhe qualquer uma
        const bestCards = computerCards.filter((card) => card.stats[selectedStat].base_stat > playerSelectedCard.stats[selectedStat].base_stat);

          if (bestCards.lenght) {
            computerID = computerCards.findIndex((card) => (card.stats[selectedStat].base_stat === bestCards[Math.floor(Math.random() * bestCards.length)].stats[selectedStat].base_stat));
          } else {
            computerID = Math.floor(Math.random() * computerCards.length);
          }
        
      } else if (difficult === 'Hard') {
      // Escolhe a carta mais forte do que a do adversario, porem a mais fraca do proprio baralho, se não houver, escolhe a que tem o menor stat
      const bestCards = computerCards.filter((card) => card.stats[selectedStat].base_stat > playerSelectedCard.stats[selectedStat].base_stat).map((card) => card.stats[selectedStat].base_stat);
      computerID = computerCards.findIndex((card) => card.stats[selectedStat].base_stat === Math.min.apply(Math, bestCards));

        if (computerID === -1) {
          const worstCards = computerCards.filter((card) => card.stats[selectedStat].base_stat <= playerSelectedCard.stats[selectedStat].base_stat).map((card) => card.stats[selectedStat].base_stat);
          computerID = computerCards.findIndex((card) => card.stats[selectedStat].base_stat === Math.min.apply(Math, worstCards));
        }
      }

      setTimeout(() => {
        setComputerSelectedCard(computerCards[computerID])
        setComputerCards(computerCards.filter((card, index) => index !== computerID))
      }, 2000)
      
    } else if (turn === "Computer" && computerCards.length && !isObjectEmpty(playerSelectedCard) && !isObjectEmpty(computerSelectedCard)) {
      // Escolhe uma carta e stat de forma aleatória
      if (difficult === 'Easy') {
        computerIndex = Math.floor(Math.random() * computerCards[0].stats.length);
        computerID = Math.floor(Math.random() * computerCards.length);

      } if (difficult === 'Medium') {
        // Escolhe aleatoriamente um stat, e pega o mais forte
        computerIndex = Math.floor(Math.random() * computerCards[0].stats.length);
        const bestStat = computerCards.map((card) => card.stats[computerIndex].base_stat)
        computerID = computerCards.findIndex((card) => card.stats[computerIndex].base_stat === Math.max.apply(Math, bestStat));

      } else if (difficult === 'Hard') {
      // Escolhe o melhor stat
      const allStats = computerCards.map((card) => card.stats.map((stat) => stat.base_stat));
      let bestStat = {value: 0, cardIndex: 0, statIndex: 0};
    
      allStats.forEach((array, cardIndex) => {
       array.forEach((value, statIndex) => {
        if(value > bestStat.value) {
          bestStat.value = value;
          bestStat.cardIndex = cardIndex;
          bestStat.statIndex = statIndex;
        }
       })
      })

      computerID = bestStat.cardIndex;
      computerIndex = bestStat.statIndex;
      }

      setTimeout(() => {
        setSelectedStat(computerIndex)
        setComputerSelectedCard(computerCards[computerID])
        setComputerCards(computerCards.filter((card, index) => index !== computerID))
        setTurn('Player');
      }, 2000)
    }


  }, [computerCards, setComputerCards, playerSelectedCard, computerSelectedCard, setComputerSelectedCard, setTurn, turn, difficult, selectedStat, setSelectedStat, isObjectEmpty])

  return {computerSelectedCard, setComputerSelectedCard};

}

export {useComputer}