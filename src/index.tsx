import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import T3Game from './app/T3Game';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <T3Game />
  </React.StrictMode>
);


