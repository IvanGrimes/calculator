import React, { Component } from 'react';
import ButtonList from '../ButtonList/ButtonList';
import Display from '../Display/Display';
import css from './App.module.css';
import calculate from '../../utils/calculate';
// TODO: Rewrite calculate and operate,

class App extends Component {
  state = {
    next: null,
    operation: null,
    total: null,
  };

  handleClick = (value) => {
    this.setState(prevState => (calculate(prevState, value)));
  };

  render() {
    const { next, total, operation } = this.state;

    return (
      <div>
        <Display>
          {total === null && next === null && '0'}
          {total && total}
          {operation && operation}
          {next && next}
        </Display>
        <ButtonList handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
