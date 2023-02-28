import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  justify-items: center;
  gap: 40px;
  margin: 0 auto;
  padding: 20px;
  color: #FFFFFF;

  img {
    height: 240px;
  }

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

  @media(max-width: 1024px) {
    gap: 20px;
    padding: 10px;

    img {
      height: 140px;
    }

    span {
      font-size: 1.8rem;
    }
  }

  @media(max-width: 425px) {
    span {
      font-size: 1.4rem;
    }

    img {
      height: 100px;
    }
  }
`

export const DifficultButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  @media(max-width: 425px) {
    grid-template-columns: initial;
  }
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

  @media(max-width: 1024px) {
    font-size: 1rem;
  }

  @media(max-width: 425px) {
    padding: 5px 10px;
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
  filter: ${props => props.selected === 'easy' && 'grayscale(0)'};
  background: #4B974C;
`

export const Medium = styled(Button)`
  filter: ${props => props.selected === 'medium' && 'grayscale(0)'};
  background: #574EC2;
`

export const Hard = styled(Button)`
  filter: ${props => props.selected === 'hard' && 'grayscale(0)'};
  background: #FE0000;
`

export const Human = styled(Button)`
  filter: ${props => props.selected === 'human' && 'grayscale(0)'};
  background: #FFA700;
`

export const StartGame = styled(Button)`
  width: 200px;
  background: #0989D0;

  filter: ${props => props.difficult && 'grayscale(0)'};

  &:hover {
    filter: ${props => props.difficult ? 'brightness(1.2)' : 'grayscale(1)'};
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

  @media(max-width: 425px) {
    padding: 5px 10px;

    p {
      font-size: .800rem;
    }
  }
`

export const DifficultDescription = styled(Description)`

  p:nth-child(1) {
    display: ${props => props.selected === 'easy' && 'initial'};
  }

  p:nth-child(2) {
    display: ${props => props.selected === 'medium' && 'initial'};
  }

  p:nth-child(3) {
    display: ${props => props.selected === 'hard' && 'initial'};
  }

  p:nth-child(4) {
    display: ${props => props.selected === 'human' && 'initial'};
  }

`

