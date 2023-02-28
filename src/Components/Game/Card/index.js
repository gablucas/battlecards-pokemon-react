import React from 'react';
import { GlobalContext } from '../../Context';
import { Container, ContainerBattleCard, Content, Name, Stat, Stats, StyledImage } from './styles';

const Card = ({ id, data, selectAttribute, animationTime }) => {
  const { selectedStat, animate } = React.useContext(GlobalContext);

return (
    <Container animationTime={animationTime} >
      <Content>
        <Name>{data.name}</Name>
        
        <StyledImage>
          <img src={data.sprites.front_default} alt="" /> 
        </StyledImage>

        <Stats>
          {data.stats.map((stat, statIndex) => (
            <Stat key={statIndex} onClick={(e) => selectAttribute(id, statIndex, e)} animate={animate} selectedStat={selectedStat} thisStat={statIndex}>{stat.stat.name} <span>{stat.base_stat}</span></Stat>
          ))}
          
        </Stats>
      </Content>
    </Container>
  )
}

export default Card

const BattleCard = ({ data, card }) => {
  const {selectedStat} = React.useContext(GlobalContext);

  return (
      <ContainerBattleCard card={card} data={data}>
        <Content>
          <Name>{data.name}</Name>

          <StyledImage>
            <img src={data.sprites.front_default} alt="" /> 
          </StyledImage>
  
          <Stats>
            <Stat>{data.stats[selectedStat].stat.name}<span>{data.stats[selectedStat].base_stat}</span></Stat>

          </Stats>
        </Content>
      </ContainerBattleCard>
    )
  }

export { BattleCard }