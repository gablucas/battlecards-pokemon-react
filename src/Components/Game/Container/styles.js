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

const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  font-weight: 800;

  position: absolute;
`

export const PlayerScore = styled(Score)`
  color: fuchsia;
  left: 100px;
`

export const ComputerScore = styled(Score)`
  color: orangered;
  right: 100px
`