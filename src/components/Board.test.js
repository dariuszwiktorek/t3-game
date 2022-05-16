import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event";
import Board from "./Board"
import { getInitialCellsValues } from '../app/gameUtils';


jest.mock('./Cell', () => (props)=> {
  return (<button {...props} />)
});

test('on initial Render all the Board cells should be empty and not be disabled', () => {
  render(<Board cellsValues={getInitialCellsValues()} />);

  const cellsInBoard = screen.getAllByRole('button');
  expect(cellsInBoard.length).toEqual(9);

  cellsInBoard.forEach( (Cell) => {
    expect(Cell).not.toHaveAttribute('value')
    expect(Cell).not.toBeDisabled();
  });
});

test('all the board cells should be filled with a value and be disabled', () => {
  render(<Board cellsValues={Array(9).fill('SOME_MOCK_VALUE')} />);

  const cellsInBoard = screen.getAllByRole('button');
  expect(cellsInBoard.length).toEqual(9);

  cellsInBoard.forEach( (Cell) => {
    expect(Cell).toHaveAttribute('value', 'SOME_MOCK_VALUE')
    expect(Cell).toBeDisabled();
  });
});

test('updating a cell with a value should disable it', () => {
  const cellsValues = getInitialCellsValues();//
  const {rerender} = render(<Board cellsValues={cellsValues} />);
  const UPDATE_INDEX = 3;
  const UPDATE_VALUE = 'UPDATED_VALUE';
  const updatedCellsValues = cellsValues.splice(0);
  updatedCellsValues[UPDATE_INDEX] = UPDATE_VALUE;

  rerender(<Board cellsValues={updatedCellsValues} />);
  
  const cellsInBoard = screen.getAllByRole('button');
  expect(cellsInBoard.length).toEqual(9);  
  expect(cellsInBoard[UPDATE_INDEX]).toHaveAttribute('value', UPDATE_VALUE);
  expect(cellsInBoard[UPDATE_INDEX]).toBeDisabled();
  cellsInBoard
    .filter((it,i) => i!==UPDATE_INDEX)
    .forEach( (Cell, i) => {
      expect(Cell).not.toHaveAttribute('value');
      expect(Cell).not.toBeDisabled(); 
  });
});

test('the Board passes to cells onClick callback with its index as a callback argument', () => {
  const onClickHandler = jest.fn();
  render(<Board cellsValues={getInitialCellsValues()} onCellClick={onClickHandler} />);

  const cellsInBoard = screen.getAllByRole('button');
  expect(cellsInBoard.length).toEqual(9);

  cellsInBoard.forEach( (Cell,index) => {
    fireEvent.click(Cell);
    expect(onClickHandler).toBeCalledTimes(index+1);
    expect(onClickHandler).toHaveBeenLastCalledWith(index);
  });
});
