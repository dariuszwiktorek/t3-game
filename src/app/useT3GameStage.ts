import { useState } from "react";
import { CellValue, GameResult, GameState, WinningLine, WINNING_LINES } from "../model/T3GameModel";
import { getInitialCellsValues, getPlayerMark } from "./gameUtils";


const findWinningLine = (cellsValues:CellValue[]):WinningLine => {
  for (const wl of WINNING_LINES) {
    if ( cellsValues[wl[0]] !== null
      && cellsValues[wl[0]]===cellsValues[wl[1]] 
      && cellsValues[wl[1]]===cellsValues[wl[2]] ){
        
        return wl;
    }
  };

  return null;
}

const areAllCellsSelected = (cellsValues:CellValue[]) => {
  return !cellsValues.some((it:CellValue) => it === null);
}

const determineGameResult = (hasWinningLine:boolean, allCellsSelected:boolean) => {
  if ( hasWinningLine ){
    return GameResult.WIN;
  } 
    
  return allCellsSelected  ? GameResult.TIE : GameResult.UNDETERMINED;
}

const checkCurrentGameState = (cellsValues:CellValue[]):GameState => {
  const winningLine: WinningLine = findWinningLine(cellsValues.slice());
  const allCellsSelected = areAllCellsSelected(cellsValues);

  return {
    gameResult: determineGameResult(winningLine !== null, allCellsSelected),
    winningLine,
  };
}



const useT3GameStage = () => {
  const [cellsValues, setCellsValues] = useState<Array<CellValue>>(getInitialCellsValues())
  const [movesCount, setMovesCount] = useState<number>(0);
  const [{ gameResult, winningLine }, setGameState] = useState<GameState>({ 
    gameResult:GameResult.UNDETERMINED, 
    winningLine: null,
  });
  
  const handleCellClick = (cellIndex:number) => {
    if (gameResult === GameResult.TIE || gameResult === GameResult.WIN){
      return;
    }
    
    const newCellsValues = cellsValues.splice(0);
    newCellsValues[cellIndex] = getPlayerMark(movesCount);
    
    setCellsValues(newCellsValues);

    const newGameState = checkCurrentGameState(newCellsValues)
    if (newGameState.gameResult === GameResult.UNDETERMINED){
      setMovesCount(movesCount + 1);
    }

    setGameState(newGameState);
  };

  return {
    cellsValues,
    gameResult,
    winningLine, 
    movesCount, 
    handleCellClick,
  };
};



export default useT3GameStage;