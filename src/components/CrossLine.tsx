import React from 'react'
import styled from 'styled-components';
import { WinningLine, WINNING_LINES } from '../model/T3GameModel'

const LINE_STYLE = '8px solid #FF000077';
const LineContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 234px;
`;

const DescendingDiagonalLine = styled.div`
  position: absolute;
  border-bottom: ${LINE_STYLE};
  border-radius: 6px;
  width: 142%;
  height: 100%;
  transform-origin: top left;
  pointer-events: none;
  transform: rotate(45deg) translateY(-100%);
  pointer-events: none;
  left:-2px;
`;
const RaisingDiagonalLine = styled.div`
  position: absolute;
  border-bottom: ${LINE_STYLE};
  border-radius: 6px;
  width: 142%;
  height: 100%;
  transform-origin: top left;
  pointer-events: none;
  transform: rotate(135deg) translateY(-170%) translateX(-50%);
  pointer-events: none;
  top:-14px;
`;
const TX:number[] = [66, 146,226];
const VerticalLine = styled.div<{index:number}>`
  position: absolute;
  border-left: ${LINE_STYLE};
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transform-origin: top left;
  pointer-events: none;
  transform: translateX(${({index}) => TX[index]}px);
  pointer-events: none;
`;
const TY:number[] = [62, 142, 222];
const HorizontalLine = styled.div<{index:number}>`
  position: absolute;
  border-top: ${LINE_STYLE};
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transform-origin: top left;
  pointer-events: none;
  transform: translateY(${({index}) => TY[index]}px);
  pointer-events: none;
`;

const getLinebyLineIndex = (lineIndex:number) => {
  if (lineIndex > -1 && lineIndex<3) 
    return <HorizontalLine data-testid='horizontal-line' index={lineIndex}/>;

  if (lineIndex > -1 && lineIndex<6) 
    return <VerticalLine data-testid='vertical-line' index={lineIndex-3}/>;

  if (lineIndex===6) 
    return <DescendingDiagonalLine data-testid='descending-diagonal-line'/>;

  if (lineIndex===7) 
    return <RaisingDiagonalLine  data-testid='raising-diagonal-line'/>;

  return null;
}

const CrossLine = ({
  winningLine,
}:{
  winningLine: WinningLine,
}) => {
  if (winningLine === null) 
    return null;
  
  const lineId = WINNING_LINES.indexOf(winningLine);
  return (
    <LineContainer data-testid='cross-line-container'>
      {
        getLinebyLineIndex(lineId)
      } 
    </LineContainer>
  )
}

export default CrossLine
