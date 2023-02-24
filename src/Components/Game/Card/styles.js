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
  background: linear-gradient(#FCD705, #e7c500);
  animation: ${RevealCard};
  animation-duration: ${props => props.animationTime}s;
  transition: transform .3s;

  &:hover {
    transform: translateY(-30px);
  }
`
export const Content = styled.div`
  display: grid;
  padding: 12px;
  background: url(${cardfront}) center no-repeat;
`

export const Name = styled.span`

  text-transform: capitalize;
  letter-spacing: 2px;
  text-align: center;
  color: #FFF;
  background: #FCD705;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
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
`
export const Stat = styled.li`
  filter: ${props => props.animate && props.selectedStat && props.selectedStat !== props.thisStat ? 'brightness(.5)' : 'brightness(1)'};
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


export const ContainerBattleCard = styled.div`
  width: 240px;

  padding: 12px;
  border-radius: 10px;
  background: linear-gradient(#FCD705, #e7c500);
`


export const FakeCard = styled.div`
  width: 280px;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  background: url(${cardback}) center no-repeat;
  background-size: 100%;
  animation: ${RevealFakeCard};
  animation-duration: ${props => props.animationTime}s;
`