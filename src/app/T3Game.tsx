import styled from 'styled-components'
import Board from '../components/Board';
import CrossLine from '../components/CrossLine';
import Status from '../components/Status';
import useT3GameStage from './useT3GameStage';


const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
  max-width: 700px;
  padding-bottom: 84px;
  background: #F2E7C9;
  color: #413C58;
  border-radius: 20px;
`;


const T3Game = () => {
  const {
    cellsValues, 
    gameResult, 
    winningLine, 
    movesCount, 
    handleCellClick
  } = useT3GameStage();

  return (
    <GameContainer>
      <Status gameResult={gameResult} movesCount={movesCount}/>
      <CrossLine winningLine={winningLine}/>
      <Board cellsValues={cellsValues} onCellClick={handleCellClick}/> 
    </GameContainer>
  )
}

export default T3Game

