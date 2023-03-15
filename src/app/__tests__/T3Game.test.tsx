
import { render, screen } from "@testing-library/react";
import { GameResult, WinningLine } from "../../model/T3GameModel";
import T3Game from "../T3Game";


jest.mock('../../components/Status', () => (props: {
  gameResult:GameResult,
  movesCount:number,
})=> {
  return (<mock-status data-testid='status' {...props} />)
});
jest.mock('../../components/CrossLine', () => (props: {winningLine: WinningLine})=> {
  return (<mock-cross-line data-testid='cross-line' {...props} />)
});
jest.mock('../../components/Board', () => (props)=> {
  return (<mock-board data-testid='board' {...props} />)
});
const MOCKED_VALUES = {
  cellsValues: 'mocked cell values', 
  gameResult: 'mocked game result', 
  winningLine: 'mocked wining', 
  movesCount: 'mocked moves count', 
  handleCellClick: 'mocked onCellClick handler',
}
jest.mock('../useT3GameStage', () => ()=> {
  return {...MOCKED_VALUES}
});

test('renders game with status, board and crossline',() => {
  render(<T3Game />);
  expect(screen.getByTestId('status')).toBeInTheDocument();
  expect(screen.getByTestId('cross-line')).toBeInTheDocument();
  expect(screen.getByTestId('board')).toBeInTheDocument();
});

test('renders games status with current status data',() => {
  render(<T3Game />);
  expect(screen.getByTestId('status')).toHaveAttribute('gameResult',MOCKED_VALUES.gameResult)
  expect(screen.getByTestId('status')).toHaveAttribute('movesCount',MOCKED_VALUES.movesCount)
});

test('renders cross line with current winningLine',() => {
  render(<T3Game />);
  expect(screen.getByTestId('cross-line')).toHaveAttribute('winningLine',MOCKED_VALUES.winningLine)
});

test('renders board with the current cellsValues and sets onCellClick callback',() => {
  render(<T3Game />);
  expect(screen.getByTestId('board')).toHaveAttribute('cellsValues',MOCKED_VALUES.cellsValues)
  expect(screen.getByTestId('board')).toHaveAttribute('onCellClick',MOCKED_VALUES.onCellClick)
});
