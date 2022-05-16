import React from 'react'
import styled from 'styled-components';
import { getPlayerMark } from '../app/gameUtils';
import { GameResult } from '../model/T3GameModel';


const StatusContainer = styled.div`
  flex: 0 0 80px;
  font-size: 2rem;
  margin: 36px;
  padding: 24px
`
const MovesLeft = styled.div`
  font-size: 1.4rem;
  margin-top: 10px;
  text-align: center;
`
const Status = ({
  gameResult, 
  movesCount,
}:{
  gameResult:GameResult,
  movesCount:number,
}) => {
  let statusMessage;

  switch (gameResult) {
    case GameResult.WIN:
      statusMessage = `The winner is Player ${getPlayerMark(movesCount)}!`;
      break;
    case GameResult.TIE:
      statusMessage = `It's a Tie`; 
      break;     
    default:
      statusMessage = (
        <>
          <div>{`Player ${getPlayerMark(movesCount)} round`}</div> 
          <MovesLeft>{`${9-movesCount} moves left`}</MovesLeft> 
        </>
      )
      break;
  }

  return (
    <StatusContainer>
      {statusMessage}
    </StatusContainer>
  )
}

export default Status;

