import React from 'react';
import { GlobalContext } from '../Components/Context';

const useStartgame = () => {
  const {setPlayerCards, setComputerCards} = React.useContext(GlobalContext);

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
  }, [setPlayerCards ,setComputerCards])

  return getCards;

}

export { useStartgame }