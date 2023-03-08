import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 150px;
  align-content: end;
  align-items: end;
  height: 100vh;

  @media(max-width: 425px) {
    grid-template-rows: auto;
    height: 94vh;
  }
`

export const Computer = styled.div`
  display: grid;
  justify-content: center;
  align-items: end;

  & > div {
    display: grid;
    grid-template-columns: repeat(7, auto);
    gap: 20px;
    
    z-index: -10;
  }

  @media(max-width: 1024px) {
    overflow-x: hidden;
  }

  @media(max-width: 425px) {
    display: none;
  }
`

export const Player = styled.div`

  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: center;
  justify-items: center;
  align-content: end;
  gap: 20px;
  margin-bottom: 20px;

  @media(max-width: 1440px) {
    gap: 10px;
  }

  @media(max-width: 1024px) {
    overflow-x: scroll;
  }

  @media(max-width: 425px) {
    justify-content: initial;
  }
`

export const Score = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 1.6rem;
  font-weight: 800;
  color: #FFFFFF;
  border-radius: 8px;
  border: 2px solid #000000;
  box-shadow: 0 0 0 2px #FFA700, 0 0 0 4px #ffd689, 0 0 0 6px #000000;
  overflow: hidden;
  z-index: -10;
  position: absolute;
  top: 10px;
  left: 10px;
  

  & > span {
    text-align: center;
    background: #FFA700;
    padding: 10px;
  }
  
  div {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    
  }

  div:nth-child(2) {
    background: #0989D0;
  }

  div:nth-child(3) {
    background: #FE0000;
  }

  @media(max-width: 425px) {
    font-size: 1rem;
  }
`
const turnIndicator = keyframes`

0% {
  opacity: 0;
  transform: translateX(-300px);
}

50%, 75% {
  opacity: 1;
}

100% {
  opacity: 0;
  display: none;
}

`

export const TurnIndicator = styled.span`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  opacity: 0;
  font-size: 2.5rem;
  letter-spacing: 4px;
  font-weight: 900;
  text-align: center;
  padding: 4px 20px;
  color: #FFFFFF;
  animation: ${turnIndicator} 2s;

  @media(max-width: 1280px) {
    font-size: 2rem;
    left: 70%;
  }

  @media(max-width: 425px) {
    top: 70px;
    font-size: 1rem;
  }
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
  text-align: center;
  align-items: center;
  width: 100vw;
  padding: 40px;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  box-shadow: 0 0 0 2px #FFA700, 0 0 0 4px #ffd689, 0 0 0 6px #000000;
  background: rgba(255, 255, 255, .9);
  transform: translate(0%, -50%);
  animation: ${finalGame} .3s;
  
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

  @media(max-width: 425px) {

    button + button {
    margin-left: 0px;
  }

   div {
    display: flex;
    flex-direction: column;
    gap: 20px;
   }
  }
`

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #000000;
  box-shadow: 0 0 0 2px #FFA700, 0 0 0 4px #000000;
`

export const PlayAgain = styled(Button)`
  background: #8800C7;

  &:hover {
    background: #9d0ce0;
  }
`

export const GoMenu = styled(Button)`
  background: #4B974C;
  
  &:hover {
    background: #60af61;
  }
`

const letterSpacing = keyframes`
  to {
    letter-spacing: 10px;
  }
`

export const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 3rem;
  font-weight: 800;
  color: #FFA700;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  
  animation: ${letterSpacing} 5s infinite;

  @media(max-width: 425px) {
    font-size: 2.8rem;
  }
`
