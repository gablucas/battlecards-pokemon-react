import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context';
import logo from '../../../assets/logo.png'

import { DifficultButtons, Container, DifficultDescription, Easy, Hard, Human, Medium, StartGame } from './styles'
import useRestartGame from '../../../hooks/useRestartGame';


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

const Menu = () => {
  const { difficult, setDifficult, setStartGame, setTurn } = React.useContext(GlobalContext);
  const { restartMatch } = useRestartGame();

  const navigate = useNavigate()

  function handleStartGame() {
    if (difficult) {
      restartMatch();
      setStartGame(true);
      setTurn(firstToPlay())
      navigate('/game');
    }
  }


  return (
    <Container>
      <img src={logo} alt="" />

      <div>
        <span>Escolha a dificuldade</span>
        <DifficultButtons>
          <Easy onClick={() => setDifficult('easy')} selected={difficult}>Fácil</Easy>
          <Medium onClick={() => setDifficult('medium')} selected={difficult}>Média</Medium>
          <Hard onClick={() => setDifficult('hard')} selected={difficult}>Difícil</Hard>
          <Human onClick={() => setDifficult('human')} selected={difficult}>Humana</Human>
        </DifficultButtons>
        
        <DifficultDescription selected={difficult}>
          <p>Seu adversário tomara decisões variadas</p>
          <p>Seu adversário vai jogar sem pensar</p>
          <p>Seu adversário vai jogar querendo te vencer</p>
          <p>Seu adversário vai jogar pra valer</p>
        </DifficultDescription>
      </div>

      <StartGame difficult={difficult} onClick={handleStartGame}>Iniciar Jogo</StartGame>
    </Container>
  )
}

export default Menu