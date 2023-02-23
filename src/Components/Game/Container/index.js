import React from 'react';
import Card, { BattleCard } from '../Card';
import { FakeCard } from '../Card/styles';
import { Container, Player, Battle, Computer, Score } from './styles';
import computer from '../../../assets/others/computer.png';
import { useStartgame } from '../../../hooks/useStartgame';
import { useComputerinteligence } from '../../../hooks/useComputerInteligence';
import { useScore } from '../../../hooks/useScore';
import { useRound } from '../../../hooks/useRound';

const Game = () => {
  const [turn, setTurn] = React.useState('Player');
  const [playerSelectedCard, setPlayerSelectedCard] = React.useState({});

  const { getCards, playerCards, setPlayerCards, computerCards, setComputerCards } = useStartgame();
  const { computerSelectedCard, setComputerSelectedCard } = useComputerinteligence(computerCards, setComputerCards, playerSelectedCard, turn, setTurn);
  const score = useScore(playerSelectedCard, setPlayerSelectedCard, computerSelectedCard, setComputerSelectedCard, setTurn)
  const {round, scoreRound} = useRound(getCards, score)


  React.useEffect(() => {
    getCards()
  }, [getCards])


  function play(id, statIndex) {
    if (!playerSelectedCard.card && !computerSelectedCard.card && turn === "Player") {
      setPlayerSelectedCard({card: playerCards[id], statIndex});
      setPlayerCards(playerCards.filter((card, index) => index !== id));
      setTurn('Computer');
    } else if (!playerSelectedCard.card && computerSelectedCard.card && turn === "Player" && statIndex === computerSelectedCard.statIndex) {
      setPlayerSelectedCard({card: playerCards[id], statIndex});
      setPlayerCards(playerCards.filter((card, index) => index !== id));
      setTurn('Computer');
    }
  }


return (
    <Container>
      <Score>
        <span>Round: {round}</span>

        <div>
          <span>Você</span>
          <span>{scoreRound.player}</span>
        </div>

        <div>
          <span>BMO</span>
          <span>{scoreRound.computer}</span>
        </div>
      </Score>

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