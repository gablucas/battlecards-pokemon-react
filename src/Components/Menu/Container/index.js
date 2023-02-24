import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context';

import { Elimination, ButtonContainer, Container, ModeDescription, DifficultDescription, Easy, Hard, Human, Medium, StartGame, Trunfo } from './styles'

const Menu = () => {
  const { mode, setMode, difficult, setDifficult, setStartGame } = React.useContext(GlobalContext);
  const navigate = useNavigate()

  function handleStartGame() {
    if (mode && difficult) {
      setStartGame(true);
      navigate('/game');
    }
  }

  return (
    <Container>
        <div>
          <span>Escolha o modo do jogo</span>
          <ButtonContainer>
            <Elimination onClick={() => setMode('Elimination')} selected={mode}>Eliminação</Elimination>
            <Trunfo onClick={() => setMode('Trunfo')} selected={mode}>Super-Trunfo</Trunfo>
          </ButtonContainer>

          <ModeDescription selected={mode}>
            <p>Neste modo as cartas jogadas em campo são eliminadas a cada confronto, vence quem ganhar mais vezes no confronto </p>
            <p>Neste modo as cartas jogadas em campo são passadas para o vencedor do confronto, vence quem conseguir todas as cartas do adversário</p>
          </ModeDescription>
        </div>

        <div>
          <span>Escolha a dificuldade</span>
          <ButtonContainer>
            <Easy onClick={() => setDifficult('easy')} selected={difficult}>Fácil</Easy>
            <Medium onClick={() => setDifficult('medium')} selected={difficult}>Média</Medium>
            <Hard onClick={() => setDifficult('hard')} selected={difficult}>Difícil</Hard>
            <Human onClick={() => setDifficult('human')} selected={difficult}>Humana</Human>
          </ButtonContainer>
          
          <DifficultDescription selected={difficult}>
            <p>Seu adversário tomara decisões variadas</p>
            <p>Seu adversário vai jogar sem pensar</p>
            <p>Seu adversário vai jogar querendo te vencer</p>
            <p>Seu adversário vai jogar pra valer</p>
          </DifficultDescription>

        </div>

        <StartGame mode={mode} difficult={difficult} onClick={handleStartGame}>Iniciar Jogo</StartGame>
    </Container>
  )
}

export default Menu