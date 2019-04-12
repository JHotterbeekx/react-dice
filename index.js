import React from 'react';
import ReactDOM from 'react-dom';
import ReactDicePublished from 'react-dice-roller';
import ReactDice from './react-dice/react-dice';

ReactDOM.render(
  <div>
    <ReactDice sides={20} showProgress />
    <ReactDicePublished sides={20} showProgress />
  </div>,
  document.getElementById('root')
);