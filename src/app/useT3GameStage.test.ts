import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { GameResult } from "../model/T3GameModel";
import { getInitialCellsValues } from "./gameUtils";
import useT3GameStage from "./useT3GameStage";

test('returns initial stage of the game', ()=>{
  const {result} = renderHook(()=>useT3GameStage());
  const {
    cellsValues,
    gameResult,
    winningLine, 
    movesCount, 
    handleCellClick,
  } = result.current;

  expect(cellsValues).toEqual(getInitialCellsValues());
  expect(gameResult).toEqual(GameResult.UNDETERMINED);
  expect(winningLine).toBeNull();
  expect(movesCount).toEqual(0);
  expect(handleCellClick).toEqual(expect.any(Function));
});

test('returns incompleted stage of the game with undetermined result', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [0,1,2,3,4,5].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual([
    'X','O','X',
    'O','X','O',
    null, null, null
  ]);
  expect(result.current.gameResult).toEqual(GameResult.UNDETERMINED);
  expect(result.current.winningLine).toBeNull();
  expect(result.current.movesCount).toEqual(6);
  expect(result.current.handleCellClick).toEqual(expect.any(Function));
});

test('returns completed stage of the game with a Tie', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [0,1,2,3,4,6,5,8,7].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual([
    'X','O','X',
    'O','X','X',
    'O','X','O',
  ]);
  expect(result.current.gameResult).toEqual(GameResult.TIE);
  expect(result.current.winningLine).toBeNull();
  expect(result.current.movesCount).toEqual(8);
  expect(result.current.handleCellClick).toEqual(expect.any(Function));
});


test('returns completed stage of the game with a Winner that crossed TOP HORIZONTAL line', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [0,3,1,4,2].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual(['X','X','X','O','O',null,null,null,null]);
  expect(result.current.gameResult).toEqual(GameResult.WIN);
  expect(result.current.winningLine).toEqual([0,1,2]);
});

test('returns completed stage of the game with a Winner that crossed MIDDLE HORIZONTAL line', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [3,0,4,1,5].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual(['O','O',null,'X','X','X',null,null,null]);
  expect(result.current.gameResult).toEqual(GameResult.WIN);
  expect(result.current.winningLine).toEqual([3,4,5]);
});

test('returns completed stage of the game with a Winner that crossed BOTTOM HORIZONTAL line', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [6,3,7,4,8].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual([null,null,null,'O','O',null,'X','X','X']);
  expect(result.current.gameResult).toEqual(GameResult.WIN);
  expect(result.current.winningLine).toEqual([6,7,8]);
});

test('returns completed stage of the game with a Winner that crossed LEFT VERTICAL line', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [0,1,3,4,6].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual(['X','O',null,'X','O',null,'X',null,null]);
  expect(result.current.gameResult).toEqual(GameResult.WIN);
  expect(result.current.winningLine).toEqual([0,3,6]);
});

test('returns completed stage of the game with a Winner that crossed MIDDLE VERTICAL line', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [1,0,4,3,7].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual(['O','X',null,'O','X',null,null,'X',null]);
  expect(result.current.gameResult).toEqual(GameResult.WIN);
  expect(result.current.winningLine).toEqual([1,4,7]);
});

test('returns completed stage of the game with a Winner that crossed RIGHT VERTICAL line', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [2,1,5,4,8].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual([null,'O','X',null,'O','X',null,null,'X']);
  expect(result.current.gameResult).toEqual(GameResult.WIN);
  expect(result.current.winningLine).toEqual([2,5,8]);
});

test('returns completed stage of the game with a Winner that crossed DESCENDING DIAGONAL line', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [0,2,4,5,8].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual(['X',null,'O',null,'X','O',null,null,'X']);
  expect(result.current.gameResult).toEqual(GameResult.WIN);
  expect(result.current.winningLine).toEqual([0,4,8]);
});

test('returns completed stage of the game with a Winner that crossed RISING DIAGONAL line', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [2,1,4,3,6].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual([null,'O','X','O','X',null,'X',null,null]);
  expect(result.current.gameResult).toEqual(GameResult.WIN);
  expect(result.current.winningLine).toEqual([2,4,6]);
});

test('returns completed stage with extra cell clicks after the WIN that do not do anything', ()=>{
  const { result } = renderHook(()=>useT3GameStage());

  [0,3,1,4,2,5,6,7,8].forEach((cellIndex)=>{
    act( () => {
      result.current.handleCellClick(cellIndex); 
    });
  });
  
  expect(result.current.cellsValues).toEqual(['X','X','X','O','O',null,null,null,null]);
  expect(result.current.gameResult).toEqual(GameResult.WIN);
  expect(result.current.winningLine).toEqual([0,1,2]);
  expect(result.current.movesCount).toEqual(4);
  expect(result.current.handleCellClick).toEqual(expect.any(Function));
});