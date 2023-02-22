import React from 'react';
import Card, { BattleCard } from '../Card';
import { FakeCard } from '../Card/styles';
import { Container, Player, Battle, Computer, PlayerScore, ComputerScore } from './styles';
import computer from '../../../assets/others/computer.png';
import { useStartgame } from '../../../hooks/useStartgame';
import { useComputerinteligence } from '../../../hooks/useComputerInteligence';
import { useScore } from '../../../hooks/useScore';

const Game = () => {
  const [turn, setTurn] = React.useState('Player');
  const [playerSelectedCard, setPlayerSelectedCard] = React.useState({});

  const { playerCards, setPlayerCards, computerCards, setComputerCards } = useStartgame();
  const { computerTurn, computerSelectedCard, setComputerSelectedCard } = useComputerinteligence(computerCards, setComputerCards, playerSelectedCard, setTurn);
  const score = useScore(playerSelectedCard, setPlayerSelectedCard, computerSelectedCard, setComputerSelectedCard)

  function play(id, statIndex, statName, e) {
    if (!playerSelectedCard.card) {
      setPlayerSelectedCard({card: playerCards[id], statName, statIndex})
      setPlayerCards(playerCards.filter((card, index) => index !== id))
      setTurn('Computer')
    }
  }

  React.useEffect(() => {
    if (turn === 'Computer') {
      computerTurn()
    }
  }, [turn, computerTurn])


return (
    <Container>
      <PlayerScore>
        <span>Você</span>
        <span>{score.player}</span>
      </PlayerScore>

      <ComputerScore>
        <span>BMO</span>
        <span>{score.computer}</span>
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
        {playerSelectedCard.card && <BattleCard data={playerSelectedCard} />}
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