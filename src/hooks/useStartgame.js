import React from 'react';

const useStartgame = () => {
  const [playerCards, setPlayerCards] = React.useState([])
  const [computerCards, setComputerCards] = React.useState([]);


  React.useEffect(() => {
    const playerNewCards = [];
    const computerNewCards = [];

    async function getCards() {

      for (let i = 1; i <= 12; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1008) + 1}`);
        const json = await response.json();

        if (i <= 6) {
          playerNewCards.push(json)
        } else {
          computerNewCards.push(json)
        }
      }
      setPlayerCards(playerNewCards)
      setComputerCards(computerNewCards)
    }
    getCards();
  }, [])

  return { playerCards, setPlayerCards, computerCards, setComputerCards }
}

export { useStartgame }