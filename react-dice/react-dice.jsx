import React from 'react';
import PropTypes from 'prop-types';

export default class ReactDice extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { value: null, rolling: false };
  }

  roll() {
    this.setState({ value: Math.floor((Math.random() * this.props.sides) + 1) })
    this.nextRoll();
  }
  
  nextRoll() {
    this.timer = setTimeout(() => this.roll(), this.interval);

    const timeLeft = (this.props.rollseconds * 1000) - (Date.now() - this.start);

    if (timeLeft >= (this.props.rollseconds * 1000) / (10 / 3))  {
      this.interval = 10;
    } else {
      this.interval *= 1.4;
    }

    if (timeLeft <= 100) {
      clearTimeout(this.timer);
      this.done();
      return;
    }
  }

  throw() {
    this.setState({ rolling: true })
    this.start = Date.now();
    this.interval = 1;
    this.nextRoll();    
  }

  done() {
    this.setState({ rolling: false })
  }

  
  render() {
    let value = undefined;
    if (this.state.value !== null) {
      value = <h1>{this.state.value}</h1>
    }

    return (
      <div>
        {value}
        <button disabled={this.state.rolling} onClick={() => this.throw()}>Roll</button>
      </div>
    );
  }
}

ReactDice.defaultProps = {
  sides: 6,
  rollseconds: 2,
};

ReactDice.propTypes = {
  sides: PropTypes.number,
  rollseconds: PropTypes.number,
};