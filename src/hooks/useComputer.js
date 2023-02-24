import React from "react";
import { GlobalContext } from "../Components/Context";

const useComputer = () => {
  const {computerCards, playerSelectedCard, selectedStat } = React.useContext(GlobalContext)

  // Escolhe uma carta de forma aleatória
  function easyPlayLater() {
    return Math.floor(Math.random() * computerCards.length);
  }

  // Escolhe a carta mais forte do que o adversário (Escolhe aleatoriamente uma das mais fortes), se não houver, escolhe qualquer uma
  function mediumPlayLater() {
    const bestCards = computerCards.filter((card) => card.stats[selectedStat].base_stat > playerSelectedCard.stats[selectedStat].base_stat);

    if (bestCards.lenght) {
      return computerCards.findIndex((card) => (card.stats[selectedStat].base_stat === bestCards[Math.floor(Math.random() * bestCards.length)].stats[selectedStat].base_stat));
    } else {
      return Math.floor(Math.random() * computerCards.length);
    }
  }

  // Escolhe a carta mais forte do que a do adversario, porem a mais fraca do proprio baralho, se não houver, escolhe a que tem o menor stat
  function hardPlayLater() {
    const bestCards = computerCards.filter((card) => card.stats[selectedStat].base_stat > playerSelectedCard.stats[selectedStat].base_stat).map((card) => card.stats[selectedStat].base_stat);
    let cardIndex = computerCards.findIndex((card) => card.stats[selectedStat].base_stat === Math.min.apply(Math, bestCards));

    if (cardIndex === -1) {
      const worstCards = computerCards.filter((card) => card.stats[selectedStat].base_stat <= playerSelectedCard.stats[selectedStat].base_stat).map((card) => card.stats[selectedStat].base_stat);
      cardIndex = computerCards.findIndex((card) => card.stats[selectedStat].base_stat === Math.min.apply(Math, worstCards));
    }

    return cardIndex;
  }

  // Joga de forma aleatoria (Varia entre as três dificuldades)
  function humanPlayLater() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log('COMPUTAR JOGANDO DEPOIS: ' + randomNumber)

    switch(randomNumber) {
      case 0:
        return () => easyPlayLater();
      case 1:
        return () => mediumPlayLater();
      case 2:
        return () => hardPlayLater();
      default:
        return null;
    }
  }



  // Escolhe uma carta e stat de forma aleatória
  function easyPlayFirst() {
    let statIndex = Math.floor(Math.random() * computerCards[0].stats.length);
    let cardIndex = Math.floor(Math.random() * computerCards.length);

    return {
      cardIndex,
      statIndex,
    }
  }

  // Escolhe aleatoriamente um stat, e pega o mais forte
  function mediumPlayFirst() {
    const statIndex = Math.floor(Math.random() * computerCards[0].stats.length);
    const bestStat = computerCards.map((card) => card.stats[statIndex].base_stat);
    const cardIndex = computerCards.findIndex((card) => card.stats[statIndex].base_stat === Math.max.apply(Math, bestStat));

    return {
      cardIndex,
      statIndex,
    }
  }

  // Escolhe o melhor stat
  function hardPlayFirst() {
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

    return {
      cardIndex: bestStat.cardIndex,
      statIndex: bestStat.statIndex,
    }
  }

  // Joga de forma aleatoria (Varia entre as três dificuldades)
  function humanPlayFirst() {
    const randomNumber = Math.floor(Math.random() * 3)
    console.log('COMPUTAR JOGANDO PRIMEIRO: ' + randomNumber)

    switch(randomNumber) {
      case 0:
        return () => easyPlayFirst();
      case 1:
        return () => mediumPlayFirst();
      case 2:
        return () => hardPlayFirst();
      default:
        return null;
    }
  }

  return {
    playLater: {
      easy: () => easyPlayLater(),
      medium: () => mediumPlayLater(),
      hard: () => hardPlayLater(),
      human: () => humanPlayLater(),
    },

    playFirst: {
      easy: () => easyPlayFirst(),
      medium: () => mediumPlayFirst(),
      hard: () => hardPlayFirst(),
      human: () => humanPlayFirst(),
    }
  };
}

export {useComputer}