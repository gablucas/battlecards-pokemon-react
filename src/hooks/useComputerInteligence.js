import React from "react";

const useComputerinteligence = (computerCards, setComputerCards, playerSelectedCard, setTurn) => {
  const [computerSelectedCard, setComputerSelectedCard] = React.useState({});

  function computerTurn() {
    const {card: playerCard, statIndex, statName} = playerSelectedCard;

      // Inteligencia do computador - Intermediario
      // Escolhe a carta mais forte do que o adversário
      // Se não houver, escolhe qualquer uma

      // let computerID = computerCards.findIndex((card) => {
      //   if (statIndex !== 6) {
      //     return card.stats[statIndex].base_stat > playerCard.stats[statIndex].base_stat;
      //   } else {
      //     return card.weight > playerCard.weight;
      //   }
      // })

      // if (computerID === -1) {
      //   computerID = Math.floor(Math.random() * computerCards.length);
      // }

      // Inteligencia do computador - Dificil
      // Escolhe a carta mais forte do que a do adversario, porem a mais fraca do proprio baralho
      // Se não houver, escolhe a que tem o menor stat
      let betterCards;
      let computerID;
      
      if (statIndex !== 6) {
        betterCards = computerCards.filter((card) => card.stats[statIndex].base_stat > playerCard.stats[statIndex].base_stat).map((card) => card.stats[statIndex].base_stat);
        computerID = computerCards.findIndex((card) => card.stats[statIndex].base_stat === Math.min.apply(Math, betterCards));
      } else {
        betterCards = computerCards.filter((card) => card.weight > playerCard.weight).map((card) => card.weight);
        computerID = computerCards.findIndex((card) => card.weight === Math.min.apply(Math, betterCards));
      }

      let worstCards;

      if (computerID === -1) {
        if (statIndex !== 6) {
          worstCards = computerCards.filter((card) => card.stats[statIndex].base_stat <= playerCard.stats[statIndex].base_stat).map((card) => card.stats[statIndex].base_stat);
          computerID = computerCards.findIndex((card) => card.stats[statIndex].base_stat === Math.min.apply(Math, worstCards));
        } else {
          worstCards = computerCards.filter((card) => card.weight <= playerCard.weight).map((card) => card.weight);
          computerID = computerCards.findIndex((card) => card.weight === Math.min.apply(Math, worstCards));
        }
      }

      // Inteligencia do computador - Expert
      // Escolhe a carta mais forte do que a do adversario, porem a carta que tenha todos os stats menores do que as demais
      // Se não houver, escolhe a carta que tenha todos stats menores do que as demais
      
      setTimeout(() => {
        setComputerSelectedCard({card:computerCards[computerID],statName, statIndex})
        setComputerCards(computerCards.filter((card, index) => index !== computerID))
        setTurn('Player')
      }, 2000)
  }

  return {computerTurn, computerSelectedCard, setComputerSelectedCard};

}

export {useComputerinteligence}