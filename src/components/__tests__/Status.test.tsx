import { render, screen } from "@testing-library/react"
import { GameResult, GAME_TURNS_ORDER } from "../../model/T3GameModel";
import Status from "../Status"


test('Renders status for winning game',() => {
  render(<Status gameResult={GameResult.WIN} movesCount={1}/>);
  expect(screen.getByText('The winner is Player '+GAME_TURNS_ORDER[1]+'!')).toBeInTheDocument();
});

test('Renders status of a Tie in the game',() => {
  render(<Status gameResult={GameResult.TIE} movesCount={1}/>);
  expect(screen.getByText("It's a Tie")).toBeInTheDocument();
});

test('Renders status of an undetermined game result',() => {
  render(<Status gameResult={GameResult.UNDETERMINED} movesCount={3}/>);
  expect(screen.getByText('Player '+GAME_TURNS_ORDER[1]+' round')).toBeInTheDocument();
  expect(screen.getByText('6 moves left')).toBeInTheDocument();
});