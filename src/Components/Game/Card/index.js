import React from 'react';
import { Container, Content, Name, Stats, StyledImage } from './styles';

const Card = ({id, data, selectAttribute, cardIndex }) => {

return (
    <Container>
      <Content>
        <Name>{data.name}</Name>
        
        <StyledImage>
          <img src={data.sprites.front_default} alt="" /> 
        </StyledImage>

        <Stats>
          {data.stats.map((stat, statIndex) => (
            <li key={statIndex} onClick={(e) => selectAttribute(id, statIndex, e)}>{stat.stat.name} <span>{stat.base_stat}</span></li>
          ))}
          
        </Stats>
      </Content>
    </Container>
  )
}

export default Card

const BattleCard = ({ data }) => {

  return (
      <Container>
        <Content>
          <Name>{data.card.name}</Name>

          <StyledImage>
            <img src={data.card.sprites.front_default} alt="" /> 
          </StyledImage>
  
          <Stats>
            <li>{data.card.stats[data.statIndex].stat.name}<span>{data.card.stats[data.statIndex].base_stat}</span></li>

          </Stats>
        </Content>
      </Container>
    )
  }

export { BattleCard }