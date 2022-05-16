import styled from "styled-components";
import { CellValue } from "../model/T3GameModel";


const CellContainer = styled.button<{disabled:boolean}>`
display: flex;
flex-direction: column;
align-items: center;
width: 80px;
height: 80px;
font-size: 3rem;
border: solid 2px #413C58;
color: #413C58;
pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};
cursor: ${(props) => props.disabled ? 'auto' : 'pointer'};
user-select: none;
  :hover {
    background: #BFD7B5;
  }
  :active {
    background: #F2E7C9;
  }
`;

const ValueHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;


const Cell = ({value, ...rest}:{
  value: CellValue,
  disabled: boolean,
  onClick: () => void,
}) => {

  return (
    <CellContainer {...rest}>
      <ValueHolder> {value}</ValueHolder>
    </CellContainer>
  );
}


export default Cell;