import React from 'react'
import styled from 'styled-components';
import { CellsValues  } from '../model/T3GameModel';
import Cell from './Cell';


const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;


const Board = ({
  cellsValues, 
  onCellClick,
} : {
  cellsValues : CellsValues, 
  onCellClick:(cellIndex:number) => void,
}) => {

  const createCellProps = (cellIndex: number) => ({
    onClick: () => onCellClick(cellIndex),
    disabled: cellsValues[cellIndex] !== null,
    value: cellsValues[cellIndex],
  });

  return (
    <BoardContainer>
      <Row>
        <Cell {...createCellProps(0)}/>
        <Cell {...createCellProps(1)}/>
        <Cell {...createCellProps(2)}/>
      </Row>
      <Row>
        <Cell {...createCellProps(3)}/>
        <Cell {...createCellProps(4)}/>
        <Cell {...createCellProps(5)}/>
      </Row>
      <Row>
        <Cell {...createCellProps(6)}/>
        <Cell {...createCellProps(7)}/>
        <Cell {...createCellProps(8)}/>
      </Row>
    </BoardContainer>
  )
};

export default Board;
