import { fireEvent, render, screen } from "@testing-library/react";
import Cell from "./Cell";


test('Cell renders its props given value',()=>{
  render(<Cell value='TEST_VALUE'/>)
  expect(screen.getByText('TEST_VALUE')).toBeInTheDocument();
});

test('Cell is enabled by default',()=>{
  render(<Cell />)
  const cellButton = screen.getByRole('button')
  expect(cellButton).not.toBeDisabled();
  expect(cellButton).toHaveStyle({
    cursor: 'pointer',
    'pointer-events': 'auto',
  })
});

test('Cell calls a given click handler when clicked',()=>{
  const onClickHandler = jest.fn();
  render(<Cell onClick={onClickHandler}/>)
  
  fireEvent.click(screen.getByRole('button'));
  expect(onClickHandler).toHaveBeenCalled();
});

test('Cell is disabled preventing to call a given click handler',()=>{
  const onClickHandler = jest.fn();
  render(<Cell disabled={true} onClick={onClickHandler}/>)
  const cellButton = screen.getByRole('button')
  fireEvent.click(cellButton);
  expect(onClickHandler).not.toHaveBeenCalled();
  expect(cellButton).toBeDisabled();
  expect(cellButton).toHaveStyle({
    cursor: 'auto',
    'pointer-events': 'none',
  })
});


