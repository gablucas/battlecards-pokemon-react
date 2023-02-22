import React from 'react';
import Card, { BattleCard } from '../Card';
import { FakeCard } from '../Card/styles';
import { Container, Player, Battle, Computer, PlayerScore, ComputerScore } from './styles';
import computer from '../../../assets/others/computer.png';

const Game = () => {
  const [playerCards, setPlayerCards] = React.useState([])
  const [computerCards, setComputerCards] = React.useState([]);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [computerSelectedCard, setComputerSelectedCard] = React.useState({});

  const [scoreboard, setScoreBoard] = React.useState({player: 0, computer: 0});

  const teste = React.useRef();

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

  function play(id, statIndex, statName, e) {
    if (!selectedCard.card) {
      setSelectedCard({card: playerCards[id], statName: statName, stat: statIndex})
      setPlayerCards(playerCards.filter((card, index) => index !== id))


      // Inteligencia do computador - Intermediario
      // Escolhe a carta mais forte do que o adversário
      // Se não houver, escolhe qualquer uma

      // let computerID = computerCards.findIndex((card) => {
      //   if (statIndex !== 6) {
      //     return card.stats[statIndex].base_stat > playerCards[id].stats[statIndex].base_stat;
      //   } else {
      //     return card.weight > playerCards[id].weight;
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
        betterCards = computerCards.filter((card) => card.stats[statIndex].base_stat > playerCards[id].stats[statIndex].base_stat).map((card) => card.stats[statIndex].base_stat);
        computerID = computerCards.findIndex((card) => card.stats[statIndex].base_stat === Math.min.apply(Math, betterCards));
      } else {
        betterCards = computerCards.filter((card) => card.weight > playerCards[id].weight).map((card) => card.weight);
        computerID = computerCards.findIndex((card) => card.weight === Math.min.apply(Math, betterCards));
      }

      let worstCards;

      if (computerID === -1) {
        if (statIndex !== 6) {
          worstCards = computerCards.filter((card) => card.stats[statIndex].base_stat <= playerCards[id].stats[statIndex].base_stat).map((card) => card.stats[statIndex].base_stat);
          computerID = computerCards.findIndex((card) => card.stats[statIndex].base_stat === Math.min.apply(Math, worstCards));
          console.log(computerID)
        } else {
          worstCards = computerCards.filter((card) => card.weight <= playerCards[id].weight).map((card) => card.weight);
          computerID = computerCards.findIndex((card) => card.weight === Math.min.apply(Math, worstCards));
          console.log(computerID)
        }
      }

      // Inteligencia do computador - Expert
      // Escolhe a carta mais forte do que a do adversario, porem a carta que tenha todos os stats menores do que as demais
      // Se não houver, escolhe a carta que tenha todos stats menores do que as demais
      
      setTimeout(() => {
        setComputerSelectedCard({card:computerCards[computerID], statName: statName, stat: statIndex})
        setComputerCards(computerCards.filter((card, index) => index !== computerID))
      }, 2000)
    }
  }

  React.useEffect(() => {
    if (selectedCard.card && computerSelectedCard.card) {
      setTimeout(() => {
        const playerStat = selectedCard.stat !== 6 ? selectedCard.card.stats[selectedCard.stat].base_stat : selectedCard.card.weight;
        const computerStat = computerSelectedCard.stat !== 6 ? computerSelectedCard.card.stats[computerSelectedCard.stat].base_stat : computerSelectedCard.card.weight;
        console.log(teste.current)
        if (playerStat > computerStat) {
          setScoreBoard(scoreboard => ({...scoreboard, player: scoreboard.player + 1}))
        } else {
          setScoreBoard(scoreboard => ({...scoreboard, computer: scoreboard.computer + 1}))
        }

        setSelectedCard({});
        setComputerSelectedCard({});
      }, 3000)
    }
  }, [computerCards.length, computerSelectedCard, selectedCard.card, selectedCard.length, selectedCard.stat])


return (
    <Container>
      <PlayerScore>
        <span>Você</span>
        <span>{scoreboard.player}</span>
      </PlayerScore>

      <ComputerScore>
        <span>BMO</span>
        <span>{scoreboard.computer}</span>
      </ComputerScore>

      <Computer>
        <img src={computer} alt="" />
        <div>
          {computerCards.map((card, index) => (
            <FakeCard key={index} />
          ))}
        </div>
      </Computer>

      <Battle>
        {selectedCard.card && <BattleCard data={selectedCard} />}
        {computerSelectedCard.card && <BattleCard data={computerSelectedCard} />}
      </Battle>

      <Player>
        {playerCards.map((card, index) => (
          <Card key={index} data={card} id={index} selectAttribute={play} />
        ))}
      </Player>
    </Container>
  )
}

export default Game