import React from "react";

const useComputerinteligence = (computerCards, setComputerCards, playerSelectedCard, turn, setTurn) => {
  const [computerSelectedCard, setComputerSelectedCard] = React.useState({});
  const [gameDifficult, setGameDifficult] = React.useState('Hard');

  React.useEffect(() => {
    const {card: playerCard, statIndex, statName} = playerSelectedCard;
    let computerID;
    let computerIndex;

    
    if (turn === 'Computer' && playerSelectedCard.card && !computerSelectedCard.card) {
      // Escolhe uma carta de forma aleatória
      if (gameDifficult === 'Easy') {
        computerID = Math.floor(Math.random() * computerCards.length);

      } else if (gameDifficult === "Medium") {
        // Escolhe a carta mais forte do que o adversário (Escolhe aleatoriamente uma das mais fortes), se não houver, escolhe qualquer uma
        const bestCards = computerCards.filter((card) => card.stats[statIndex].base_stat > playerCard.stats[statIndex].base_stat);

          if (bestCards.lenght) {
            computerID = computerCards.findIndex((card) => (card.stats[statIndex].base_stat === bestCards[Math.floor(Math.random() * bestCards.length)].stats[statIndex].base_stat));
          } else {
            computerID = Math.floor(Math.random() * computerCards.length);
          }
        
      } else if (gameDifficult === 'Hard') {
      // Escolhe a carta mais forte do que a do adversario, porem a mais fraca do proprio baralho, se não houver, escolhe a que tem o menor stat
      const bestCards = computerCards.filter((card) => card.stats[statIndex].base_stat > playerCard.stats[statIndex].base_stat).map((card) => card.stats[statIndex].base_stat);
      computerID = computerCards.findIndex((card) => card.stats[statIndex].base_stat === Math.min.apply(Math, bestCards));

        if (computerID === -1) {
          const worstCards = computerCards.filter((card) => card.stats[statIndex].base_stat <= playerCard.stats[statIndex].base_stat).map((card) => card.stats[statIndex].base_stat);
          computerID = computerCards.findIndex((card) => card.stats[statIndex].base_stat === Math.min.apply(Math, worstCards));
        }
      }

      setTimeout(() => {
        setComputerSelectedCard({card:computerCards[computerID], statName, statIndex})
        setComputerCards(computerCards.filter((card, index) => index !== computerID))
      }, 2000)
      
    } else if (turn === "Computer" && !playerSelectedCard.card && !computerSelectedCard.card) {
      // Escolhe uma carta e stat de forma aleatória
      if (gameDifficult === 'Easy') {
        computerIndex = Math.floor(Math.random() * computerCards[0].stats.length);
        computerID = Math.floor(Math.random() * computerCards.length);

      } if (gameDifficult === 'Medium') {
        // Escolhe aleatoriamente um stat, e pega o mais forte
        computerIndex = Math.floor(Math.random() * computerCards[0].stats.length);
        const bestStat = computerCards.map((card) => card.stats[computerIndex].base_stat)
        computerID = computerCards.findIndex((card) => card.stats[computerIndex].base_stat === Math.max.apply(Math, bestStat));

      } else if (gameDifficult === 'Hard') {
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
        setComputerSelectedCard({card:computerCards[computerID], statIndex: computerIndex})
        setComputerCards(computerCards.filter((card, index) => index !== computerID))
        setTurn('Player');
      }, 2000)
    }


  }, [computerCards, setComputerCards, playerSelectedCard, computerSelectedCard ,setTurn, turn, gameDifficult])

  return {computerSelectedCard, setComputerSelectedCard};

}

export {useComputerinteligence}