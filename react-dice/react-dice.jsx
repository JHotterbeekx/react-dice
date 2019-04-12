import React from 'react';
import PropTypes from 'prop-types';

export default class ReactDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: null};
  }
  
  roll() {
    this.setState({ value: Math.floor((Math.random() * this.props.sides) + 1) })
  }

  
  render() {
    let value = undefined;
    if (this.state.value !== null) {
      value = <h1>{this.state.value}</h1>
    }

    return (
      <div>
        {value}
        <button onClick={() => this.roll()}>Roll</button>
      </div>
    );
  }
}

ReactDice.propTypes = {
  sides: PropTypes.number,
};