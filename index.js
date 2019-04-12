import React from 'react';
import ReactDOM from 'react-dom';
import ReactDice from './react-dice/react-dice';

ReactDOM.render(
  <ReactDice sides={20} />,
  document.getElementById('root')
);