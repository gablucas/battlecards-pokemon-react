import React from 'react';

const useStartgame = () => {
  const [playerCards, setPlayerCards] = React.useState([])
  const [computerCards, setComputerCards] = React.useState([]);

  const getCards = React.useCallback(async () => {
    const playerNewCards = [];
    const computerNewCards = [];
    
      for (let i = 1; i <= 4; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1008) + 1}`);
        const json = await response.json();

        if (i <= 2) {
          playerNewCards.push(json)
        } else {
          computerNewCards.push(json)
        }
      }
      setPlayerCards(playerNewCards)
      setComputerCards(computerNewCards)
  }, [])

  return { getCards, playerCards, setPlayerCards, computerCards, setComputerCards }
}

export { useStartgame }