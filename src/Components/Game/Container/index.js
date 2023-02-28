import React from 'react';
import Card, { BattleCard } from '../Card';
import { FakeCard } from '../Card/styles';
import { Container, TurnIndicator, Player, Computer, Score, FinalGame, PlayAgain, GoMenu } from './styles';
import computer from '../../../assets/others/computer.png';
import { useStartgame } from '../../../hooks/useStartgame';
import { useScore } from '../../../hooks/useScore';
import { useRound } from '../../../hooks/useRound';
import usePlayer from '../../../hooks/usePlayer';
import { GlobalContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
import useUtilies from '../../../hooks/useUtilies';
import { useBattle } from '../../../hooks/useBattle';
import useRestartGame from '../../../hooks/useRestartGame';

const Game = () => {
  const { startGame, computerCards, playerCards, playerSelectedCard, computerSelectedCard, score, turn, round, finalGame, animate } = React.useContext(GlobalContext)
  const getCards = useStartgame();
  useScore();
  useRound();
  const PlayerTurn = usePlayer();
  const navigate = useNavigate();
  const { isObjectEmpty } = useUtilies();
  useBattle();
  const {restartMatch, restartGame} = useRestartGame();


  React.useEffect(() => {
    if (startGame) {
      getCards();
    } else {
      navigate('/');
    }
  }, [getCards, startGame, navigate])


return (
    <Container>
      {turn === 'Player' ? <TurnIndicator turn={turn} key={'player'}>Sua vez</TurnIndicator> : <TurnIndicator key={'BMO'}>Vez do BMO</TurnIndicator>}

      <Score>
        <span>Round: {round}</span>

        <div>
          <span>Você</span>
          <span>{score.player.round}</span>
        </div>

        <div>
          <span>BMO</span>
          <span>{score.computer.round}</span>
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

      <div>
        {isObjectEmpty(playerSelectedCard) && <BattleCard data={playerSelectedCard} card={'player'} />}
        {isObjectEmpty(computerSelectedCard) && <BattleCard data={computerSelectedCard} />}
      </div>
      

      <Player>
        {playerCards.map((card, index) => (
          <Card key={index} data={card} id={index} selectAttribute={PlayerTurn} animationTime={(index + 1) * .3} />
        ))}
      </Player>

      {finalGame && (<FinalGame>
        <span>{score.player.round === 2 ? 'Voce Ganhou' : 'BMO Ganhou'}</span>

        <div>
          <PlayAgain onClick={restartMatch}>Jogar novamente</PlayAgain>
          <GoMenu onClick={restartGame}>Voltar para o menu</GoMenu>
        </div>
      </FinalGame>)}
    </Container>
  )
}

export default Game