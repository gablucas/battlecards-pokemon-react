import React from 'react';
import Card, { BattleCard } from '../Card';
import { FakeCard } from '../Card/styles';
import { Container, Player, Battle, Computer, Score } from './styles';
import computer from '../../../assets/others/computer.png';
import { useStartgame } from '../../../hooks/useStartgame';
import { useScore } from '../../../hooks/useScore';
import { useRound } from '../../../hooks/useRound';
import usePlayer from '../../../hooks/usePlayer';
import { GlobalContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
import useUtilies from '../../../hooks/useUtilies';
import { useBattle } from '../../../hooks/useBattle';

const Game = () => {
  const { startGame, computerCards, playerCards, playerSelectedCard, computerSelectedCard, animate } = React.useContext(GlobalContext)
  const getCards = useStartgame();
  const score = useScore()
  const {round, scoreRound} = useRound(score)
  const PlayerTurn = usePlayer();
  const navigate = useNavigate();
  const { isObjectEmpty } = useUtilies();
  useBattle();

  React.useEffect(() => {
    if (startGame) {
      getCards();
    } else {
      navigate('/');
    }
  }, [getCards, startGame, navigate])


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
            <FakeCard key={index} animationTime={(index + 1) * .3}/>
          ))}
        </div>
      </Computer>

      <Battle>
        {isObjectEmpty(playerSelectedCard) && <BattleCard data={playerSelectedCard} />}
        {isObjectEmpty(computerSelectedCard) && <BattleCard data={computerSelectedCard} />}
      </Battle>

      <Player>
        {playerCards.map((card, index) => (
          <Card key={index} data={card} id={index} selectAttribute={PlayerTurn} animationTime={(index + 1) * .3} />
        ))}
      </Player>
    </Container>
  )
}

export default Game