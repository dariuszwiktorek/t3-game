import React from 'react';
import { render, screen } from "@testing-library/react";
import { WINNING_LINES } from "../../model/T3GameModel";
import CrossLine from "../CrossLine";



test('Does not render a line if the winningLine is not specified', ()=>{
  render(<CrossLine winningLine={null}/>)
  expect(screen.queryByTestId('cross-line-container')).not.toBeInTheDocument();
});

test('Does not render a line if winningLine is not defined in WINNING_LINES', ()=>{
  render(<CrossLine winningLine={[1,2,99]}/>)
  expect(screen.getByTestId('cross-line-container')).toBeInTheDocument();
  expect(screen.queryByTestId('horizontal-line')).not.toBeInTheDocument();
  expect(screen.queryByTestId('vertical-line')).not.toBeInTheDocument();
  expect(screen.queryByTestId('raising-diagonal-line')).not.toBeInTheDocument();
  expect(screen.queryByTestId('descending-diagonal-line')).not.toBeInTheDocument();
});


test('Renders the top horizontal Line', ()=>{
  render(<CrossLine winningLine={WINNING_LINES[0]}/>)
  expect(screen.getByTestId('horizontal-line')).toBeInTheDocument();
  expect(screen.getByTestId('horizontal-line')).toHaveStyle({
    transform: 'translateY(62px)',
  })
});
test('Renders the middle horizontal Line', ()=>{
  render(<CrossLine winningLine={WINNING_LINES[1]}/>)
  expect(screen.getByTestId('horizontal-line')).toBeInTheDocument();
  expect(screen.getByTestId('horizontal-line')).toHaveStyle({
    transform: 'translateY(142px)',
  })
});
test('Renders the bottom horizontal Line', ()=>{
  render(<CrossLine winningLine={WINNING_LINES[2]}/>)
  expect(screen.getByTestId('horizontal-line')).toBeInTheDocument();
  expect(screen.getByTestId('horizontal-line')).toHaveStyle({
    transform: 'translateY(222px)',
  })
});

test('Renders the top vertical Line', ()=>{
  render(<CrossLine winningLine={WINNING_LINES[3]}/>)
  expect(screen.getByTestId('vertical-line')).toBeInTheDocument();
  expect(screen.getByTestId('vertical-line')).toHaveStyle({
    transform: 'translateX(66px)',
  })
});
test('Renders the middle vertical Line', ()=>{
  render(<CrossLine winningLine={WINNING_LINES[4]}/>)
  expect(screen.getByTestId('vertical-line')).toBeInTheDocument();
  expect(screen.getByTestId('vertical-line')).toHaveStyle({
    transform: 'translateX(146px)',
  })
});
test('Renders the bottom vertical Line', ()=>{
  render(<CrossLine winningLine={WINNING_LINES[5]}/>)
  expect(screen.getByTestId('vertical-line')).toBeInTheDocument();
  expect(screen.getByTestId('vertical-line')).toHaveStyle({
    transform: 'translateX(226px)',
  })
});

test('Renders the descending diagonal Line', ()=>{
  render(<CrossLine winningLine={WINNING_LINES[6]}/>)
  expect(screen.getByTestId('descending-diagonal-line')).toBeInTheDocument();
});

test('Renders the raising diagonal Line', ()=>{
  render(<CrossLine winningLine={WINNING_LINES[7]}/>)
  expect(screen.getByTestId('raising-diagonal-line')).toBeInTheDocument();
});