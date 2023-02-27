import styled, { keyframes } from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 40px;
`

export const Computer = styled.div`

  & > div {
    display: grid;
    grid-template-columns: repeat(8, auto);
    align-items: end;
    gap: 20px;
    
    position: absolute;
    top: 30vh;
    left: 50%;
    transform: translateX(-50%) scale(.6);
    z-index: -10;
  }

  & img {
    height: 500px;
    
    position: absolute;
    top: 14%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1000;
  }
`

const toDown = keyframes`
  from {
    opacity: 0;
    top: 50px;
  }
`

export const Battle = styled.div`
  position: relative;

  & > div {
    position: absolute;
    top: 100px;
    animation: ${toDown} 1s;
  }

  & > div:nth-child(1) {
    left: 30%;
  }

  & > div:nth-child(2) {
    right: 30%;
  }
`

export const Player = styled.div`
  display: grid;
  grid-template-columns: repeat(8, auto);
  justify-content: center;
  align-items: end;
  gap: 20px;
  height: calc(100vh - 80px);
`

export const Score = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;;
  font-size: 2rem;
  font-weight: 800;
  color: #FFFFFF;
  border-radius: 8px;
  border: 2px solid #000000;
  box-shadow: 0 0 0 2px #FFA700, 0 0 0 4px #ffd689, 0 0 0 6px #000000;
  overflow: hidden;

  position: absolute;

  & > span {
    grid-column: 1/-1;
    text-align: center;
    background: #FFA700;
  }
  
  div {
    display: grid;
    justify-items: center;
    padding: 20px;
    
  }

  div:nth-child(2) {
    background: fuchsia;
  }

  div:nth-child(3) {
    background: orangered;
  }
`
const turnIndicator = keyframes`

0% {
  opacity: 0;
  transform: translateX(-100px);
}

50%, 75% {
  opacity: 1;
  transform: translateX(-50%);
}

100% {
  opacity: 0;
  transform: translateX(100px);
}

`

export const TurnIndicator = styled.span`
  position: absolute;
  left: 50%;
  opacity: 0;
  
  animation: ${turnIndicator} 2s;
`

export const finalGame = keyframes`

0% {
  opacity: 0;
  transform: translate(-100%, -50%);
}

`

export const FinalGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 40px;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  box-shadow: 0 0 0 2px #FFA700, 0 0 0 4px #ffd689, 0 0 0 6px #000000;
  background: rgba(255, 255, 255, .9);
  transform: translate(0%, -50%);
  animation: ${finalGame} .6s;
  
  position: absolute;
  top: 50%;
  left: 0px;

  span {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 40px;
  }

  button {
    color: #FFFFFF;
  }

  button + button {
    margin-left: 40px;
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
`

export const PlayAgain = styled(Button)`
  background: #8800C7;
`

export const GoMenu = styled(Button)`
  background: #8800C7;
`
