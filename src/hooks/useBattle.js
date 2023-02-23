import React from "react";

const useBattle = (computerCards, setComputerCards, playerSelectedCard, turn, setTurn) => {

  React.useEffect(() => {

    if (turn === 'Computer' && playerSelectedCard.card && !computerSelectedCard.card) {
      // Escolhe uma carta de forma aleatória
      if (difficult === 'Easy') {
        

      } else if (difficult === "Medium") {

        
      } else if (difficult === 'Hard') {

      }

      setTimeout(() => {
        setComputerSelectedCard({card:computerCards[computerID], statName, statIndex})
        setComputerCards(computerCards.filter((card, index) => index !== computerID))
      }, 2000)
      
    } else if (turn === "Computer" && !playerSelectedCard.card && !computerSelectedCard.card) {
      // Escolhe uma carta e stat de forma aleatória
      if (difficult === 'Easy') {


      } if (difficult === 'Medium') {


      } else if (difficult === 'Hard') {

      }

      setTimeout(() => {
        setComputerSelectedCard({card:computerCards[computerID], statIndex: computerIndex})
        setComputerCards(computerCards.filter((card, index) => index !== computerID))
        setTurn('Player');
      }, 2000)
    }


  }, [])


}

export {useBattle}