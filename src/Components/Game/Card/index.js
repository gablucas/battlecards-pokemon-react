import React from 'react';
import { Container, Content, Name, Stats, StyledImage } from './styles';

const Card = ({ data, selectAttribute, id }) => {

return (
    <Container>
      <Content>
        <StyledImage>
          <img src={data.sprites.front_default} alt="" /> 
        </StyledImage>

        <Name>{data.name}</Name>
        <Stats>
          <li onClick={(e) => selectAttribute(id, 0, 'Vida', e)}>Vida <span>{data.stats[0].base_stat}</span></li>
          <li onClick={(e) => selectAttribute(id, 1, 'Ataque', e)}>Ataque <span>{data.stats[1].base_stat}</span></li>
          <li onClick={(e) => selectAttribute(id, 2, 'Defesa', e)}>Defesa <span>{data.stats[2].base_stat}</span></li>
          <li onClick={(e) => selectAttribute(id, 3, 'Ataque Especial', e)}>Ataque Especial <span>{data.stats[3].base_stat}</span></li>
          <li onClick={(e) => selectAttribute(id, 4, 'Defesa Esepcial', e)}>Defesa Especial <span>{data.stats[4].base_stat}</span></li>
          <li onClick={(e) => selectAttribute(id, 5, 'Velocidade', e)}>Velocidade <span>{data.stats[5].base_stat}</span></li>
          <li onClick={(e) => selectAttribute(id, 6, 'Peso', e)}>Peso <span>{data.weight}</span></li>
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
          <StyledImage>
            <img src={data.card.sprites.front_default} alt="" /> 
          </StyledImage>
  
          <Name>{data.card.name}</Name>
          <Stats>
            <li>{data.statName}<span>{data.stat !== 6 ? data.card.stats[data.stat].base_stat : data.card.weight}</span></li>

          </Stats>
        </Content>
      </Container>
    )
  }

export { BattleCard }