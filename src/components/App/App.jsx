import React, { Component } from 'react';
import isNumber from '../../utils/isNumber';
import ButtonList from '../ButtonList/ButtonList';
import Display from '../Display/Display';
import css from './App.module.css';
import calculate from '../../utils/calculate';
import { FLOAT, EQUAL } from '../../constants/transformationTypes';
import operationTypes from '../../constants/operationTypes';

// TODO: Add propTypes
// TODO: Complete css

class App extends Component {
  validKeys = [FLOAT, EQUAL, ...operationTypes];

  state = {
    next: null,
    operation: null,
    total: null,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleClick = (value) => {
    this.setState(prevState => (calculate(prevState, value)));
  };

  handleKeyUp = (ev) => {
    if (this.validKeys.includes(ev.key) || isNumber(ev.key)) {
      this.handleClick(ev.key);
    }
  };

  render() {
    const { next, total, operation } = this.state;

    return (
      <div
        className={css.container}
      >
        <Display
          next={next}
          operation={operation}
          total={total}
        />
        <ButtonList handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
