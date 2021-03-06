import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import css from './ButtonList.module.css';
import transformationTypes, { FLOAT, EQUAL } from '../../constants/transformationTypes';
import operationTypes from '../../constants/operationTypes';

class ButtonList extends Component {
  static propTypes = {};

  renderNumbers() {
    const { handleClick } = this.props;
    const numbers = [];

    for (let i = 1; i < 10; i += 1) {
      numbers.push(
        <Button
          key={(i + 1) * Math.random()}
          handleClick={handleClick}
        >
          {i.toString()}
        </Button>,
      );
    }

    numbers.push(
      <Button
        handleClick={handleClick}
      >
        {FLOAT}
      </Button>,
      <Button
        key={0}
        handleClick={handleClick}
      >
        {0}
      </Button>,
      <Button
        handleClick={handleClick}
      >
        {EQUAL}
      </Button>,
    );

    return numbers;
  }

  renderOperations() {
    const { handleClick } = this.props;

    return operationTypes.map(item => (
      <Button
        className={css.operationsItem}
        handleClick={handleClick}
        wide
      >
        {item}
      </Button>
    ));
  }

  renderTransformations() {
    const { handleClick } = this.props;
    const transformations = transformationTypes.filter(type => type !== EQUAL && type !== FLOAT);

    return transformations.map(item => (
      <Button
        handleClick={handleClick}
        oneFourth
      >
        {item}
      </Button>
    ));
  }

  render() {
    return (
      <div className={css.container}>
        <div className={css.transformations}>
          {this.renderTransformations()}
        </div>
        <div className={css.leftSide}>
          <div className={css.numbers}>
            {this.renderNumbers()}
          </div>
        </div>

        <div className={css.rightSide}>
          <div className={css.operations}>
            {this.renderOperations()}
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonList;
