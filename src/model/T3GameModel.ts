export type CellValue = 'X' | 'O' | null;
export type CellsValues = CellValue[];
export type WinningLine = number[] | null;
export const enum GameResult {
  WIN,
  TIE,
  UNDETERMINED,
}
export type GameState = {
  gameResult: GameResult,
  winningLine: WinningLine,
}


export const GAME_TURNS_ORDER: CellValue[] = ['X', 'O'];
export const WINNING_LINES = [
//horizontal lines
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
//vertical lines
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
//diagonal lines
  [0, 4, 8],
  [2, 4, 6],
];
