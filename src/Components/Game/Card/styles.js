import styled, { keyframes } from "styled-components";
import pokemonbg from '../../../assets/bg/pokemonbg.svg'
import cardback from '../../../assets/bg/cardback.png'
import cardfront from '../../../assets/bg/cardfront.png'

const RevealCard = keyframes`

from {
  transform: translateY(400px);
}

to {
  transform: translateY(0px);
}
`

const RevealFakeCard = keyframes`
from {
  opacity: 0;
  transform: translateY(400px);
}

to {
  transform: translateY(0px);
  opacity: 1;
}
`

export const Container = styled.div`
  width: 240px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, .6);
  background: linear-gradient(#FCD705, #e7c500);
  animation: ${RevealCard};
  animation-duration: ${props => props.animationTime}s;
  transition: transform .3s;
  z-index: 0;

  &:hover {
    transform: translateY(-30px);
  }

  @media(max-width: 1536px) {
    padding: 10px;
    width: 225px;
  }

  @media(max-width: 1366px) {
    width: 212px;
  }

  @media(max-width: 1280px) {
    width: 198px;
  }

  @media(max-width: 1024px) {
    &:hover {
      transform: none;
    }
  }
`

export const Content = styled.div`
  display: grid;
  padding: 12px;
  background: url(${cardfront}) center no-repeat;

  @media(max-width: 1440px) {
    padding: 10px;
  }
`

export const Name = styled.span`

  text-transform: capitalize;
  letter-spacing: 2px;
  text-align: center;
  color: #FFF;
  background: #FCD705;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  /* Provisório para evitar a quebra do nome do pokemon */
  white-space: nowrap;
  overflow-x: hidden;
`

export const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-bottom: 10px;
  background: url(${pokemonbg});
`

export const Stats = styled.ul`
  list-style: none;
  font-size: .875rem;
  font-weight: 700;
  color: #FFF;
  text-transform: capitalize;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  @media(max-width: 1366px) {
    font-size: .800rem;
  }
`
export const Stat = styled.li`
  filter: ${props => props.animate?.computerStat && props.selectedStat && props.selectedStat !== props.thisStat ? 'brightness(.5)' : 'brightness(1)'};
  display: flex;
  justify-content: space-between;
  padding: 2px 4px;
  margin-bottom: 4px;
  background: #788090;
  cursor: pointer;
  transition: filter .3s;

  li:hover {
    background: #C8C8C8;
  }

  span {
    font-weight: 800;
  }
`
const toDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
`

export const ContainerBattleCard = styled.div`
  width: 240px;
  padding: 12px;
  border-radius: 10px;
  background: ${props => props.card === 'player' ? 'linear-gradient(#FCD705, #e7c500)' : 'linear-gradient(#f74a4a, #FE0000)'};
  
  position: absolute;
  top: 15vh;
  left: ${props => props.card === 'player' && '30vw'};
  right:  ${props => props.card !== 'player' && '30vw'};
  animation: ${toDown} .6s;

  @media(max-width: 1536px) {
    padding: 10px;
    width: 225px;
  }

  @media(max-width: 1366px) {
    width: 212px;
  }

  @media(max-width: 1280px) {
    width: 198px;
  }

  @media(max-width: 1024px) {
    left: ${props => props.card === 'player' && '20vw'};
    right:  ${props => props.card !== 'player' && '20vw'};

    &:hover {
      transform: none;
    }
  }

  @media(max-width: 425px) {
    width: 180px;
    left: ${props => props.card === 'player' && '2vw'};
    right:  ${props => props.card !== 'player' && '2vw'};

    &:hover {
      transform: none;
    }
  }
`

export const FakeCard = styled.div`
  height: 350px;
  width: 190px;
  padding: 20px;
  border-radius: 10px;
  background: url(${cardback}) center no-repeat;
  background-size: 100%;
  animation: ${RevealFakeCard};
  animation-duration: ${props => props.animationTime}s;

  @media(max-width: 1366px) {
    height: 320px;
    width: 160px;
  }

  @media(max-width: 1024px) {
    height: 300px;
    width: 140px;
  }
`