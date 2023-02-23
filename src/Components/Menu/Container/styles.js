import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 246px 194px auto;
  justify-content: center;
  align-content: center;
  gap: 20px;
  height: 100vh;
  width: 600px;
  margin: 0 auto;
  color: #FFFFFF;

  & > div {
    display: flex;
    flex-direction: column;
  }

  span {
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 20px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
`

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #000000;
  box-shadow: 0 0 0 2px #FFA700, 0 0 0 4px #000000;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }
`
export const Elimination = styled(Button)`
  filter: ${props => props.selected === 'Elimination' && 'grayscale(0)'};
  background: #8800C7;
`
export const Trunfo = styled(Button)`
  filter: ${props => props.selected === 'Trunfo' && 'grayscale(0)'};
  background: #D90077;
`

export const Easy = styled(Button)`
  filter: ${props => props.selected === 'Easy' && 'grayscale(0)'};
  background: #4B974C;
`

export const Medium = styled(Button)`
  filter: ${props => props.selected === 'Medium' && 'grayscale(0)'};
  background: #574EC2;
`

export const Hard = styled(Button)`
  filter: ${props => props.selected === 'Hard' && 'grayscale(0)'};
  background: #FE0000;
`

export const Human = styled(Button)`
  filter: ${props => props.selected === 'Human' && 'grayscale(0)'};
  background: #FFA700;
`

export const StartGame = styled(Button)`
  background: #0989D0;

  filter: ${props => props.mode && props.difficult && 'grayscale(0)'};

  &:hover {
    filter: ${props => props.mode && props.difficult ? 'brightness(1.2)' : 'grayscale(1)'};
  }
`

export const Description = styled.div`
  display: ${props => props.selected ? 'initial' : 'none'};
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #000000;
  box-shadow: 0 0 0 2px #FFA700, 0 0 0 4px #000000;
  background: #701C1D;

  p {
    display: none;
    text-align: center;
    word-break: break-all;
  }
`

export const ModeDescription = styled(Description)`

  p:nth-child(1) {
    display: ${props => props.selected === 'Elimination' && 'initial'};
  }

  p:nth-child(2) {
    display: ${props => props.selected === 'Trunfo' && 'initial'};
  }
`

export const DifficultDescription = styled(Description)`

  p:nth-child(1) {
    display: ${props => props.selected === 'Human' && 'initial'};
  }

  p:nth-child(2) {
    display: ${props => props.selected === 'Easy' && 'initial'};
  }

  p:nth-child(3) {
    display: ${props => props.selected === 'Medium' && 'initial'};
  }

  p:nth-child(4) {
    display: ${props => props.selected === 'Hard' && 'initial'};
  }

`

