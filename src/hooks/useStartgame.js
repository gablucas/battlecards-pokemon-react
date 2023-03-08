import React from 'react';
import { GlobalContext } from '../Components/Context';

function firstToPlay() {
  const random = Math.floor(Math.random () * 2) + 1;

  switch(random) {
    case 1:
      return 'Player';
    case 2:
      return 'Computer';
    default:
      return '';
  }
}

const useStartgame = () => {
  const {cardsQuantity, setPlayerCards, setComputerCards, setTurn} = React.useContext(GlobalContext);
  const [loading, setLoading] = React.useState(false);

  const getCards = React.useCallback(async () => {
    setLoading(true);
    const playerNewCards = [];
    const computerNewCards = [];
    
      for (let i = 1; i <= (cardsQuantity * 2); i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1008) + 1}`);
        const json = await response.json();
        
        if (i <= cardsQuantity) {
          playerNewCards.push(json)
        } else {
          computerNewCards.push(json)
        }
      }
      setPlayerCards(playerNewCards);
      setComputerCards(computerNewCards);
      setTurn(firstToPlay());
      setLoading(false);

  }, [cardsQuantity ,setPlayerCards ,setComputerCards, setTurn])

  return { loading, getCards};

}

export { useStartgame }