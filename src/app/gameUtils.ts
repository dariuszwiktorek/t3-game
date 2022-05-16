import { CellValue, GAME_TURNS_ORDER } from "../model/T3GameModel";

export const getPlayerMark = (movesCount:number) =>  GAME_TURNS_ORDER[movesCount%2];
export const getInitialCellsValues = () => Array<CellValue>(9).fill(null);