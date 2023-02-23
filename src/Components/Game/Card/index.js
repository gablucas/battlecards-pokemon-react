import React from 'react';
import { GlobalContext } from '../../Context';
import { Container, Content, Name, Stats, StyledImage } from './styles';

const Card = ({ id, data, selectAttribute }) => {

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
  const {selectedStat} = React.useContext(GlobalContext);

  return (
      <Container>
        <Content>
          <Name>{data.name}</Name>

          <StyledImage>
            <img src={data.sprites.front_default} alt="" /> 
          </StyledImage>
  
          <Stats>
            <li>{data.stats[selectedStat].stat.name}<span>{data.stats[selectedStat].base_stat}</span></li>

          </Stats>
        </Content>
      </Container>
    )
  }

export { BattleCard }