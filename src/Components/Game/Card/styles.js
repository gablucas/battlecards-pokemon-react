import styled from "styled-components";
import pokemonbg from '../../../assets/bg/pokemonbg.svg'

export const Container = styled.div`
  width: 240px;

  padding: 20px;
  border-radius: 10px;
  background-color: #F8E145;
`
export const Content = styled.div`
  display: grid;
  border: 4px solid #EBEF78;
  box-shadow: 1px 1px #000, -1px -1px #000, inset 1px 1px, inset -1px -1px;
`

export const Name = styled.span`
  font-weight: 800;
  text-transform: capitalize;
  text-align: center;
  color: #FFF;
  background: #5BCAED;
`

export const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: url(${pokemonbg});
`

export const Stats = styled.ul`
  padding: 10px;
  list-style: none;
  font-size: .875rem;
  color: #FFF;
  text-transform: capitalize;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  li {
    display: flex;
    justify-content: space-between;
    padding: 2px 4px;
    font-weight: 500;
    margin-bottom: 4px;
    background: #788090;
    cursor: pointer;
  }

  li:hover {
    background: #C8C8C8;
  }

  span {
    font-weight: 800;
  }
`

export const FakeCard = styled.div`
  width: 280px;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: #121212;
`