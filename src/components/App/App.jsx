import React, { Component } from 'react';
import ButtonList from '../ButtonList/ButtonList';
import Display from '../Display/Display';
import css from './App.module.css';
import calculate from '../../utils/calculate';

// TODO: Add propTypes
// TODO: Complete css

class App extends Component {
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
    // console.log(ev.charCode, ev.which, ev.key)
    // this.handleClick(ev.key);
  };

  render() {
    const { next, total, operation } = this.state;

    return (
      <div
        className={css.container}
      >
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
