import { GAME_TURNS_ORDER } from "../../model/T3GameModel";
import { getInitialCellsValues, getPlayerMark } from "../gameUtils";

test('getPlayerMark returns FIRST element of GAME_TURNS_ORDER for an even number',()=> {
  [0,2,4,6,8].forEach((num:number)=>
    expect(getPlayerMark(num)).toEqual(GAME_TURNS_ORDER[0])
  );
})
test('getPlayerMark returns SECOND element of GAME_TURNS_ORDER for an odd number',()=> {
  [1,3,5,7,9].forEach((num:number)=>
    expect(getPlayerMark(1)).toEqual(GAME_TURNS_ORDER[1])
  );
})
test('getInitialCellsValues array of 9 null elements', ()=> {
  expect(getInitialCellsValues().length).toEqual(9);
  expect(getInitialCellsValues()).toEqual([null, null, null, null, null, null, null, null, null])
});