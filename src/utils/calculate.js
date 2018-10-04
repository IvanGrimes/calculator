import isNumber from './isNumber';
import operate from './operate';
import transformations from './transformations';
import transformationTypes from '../constants/transformationTypes';
import operationTypes from '../constants/operationTypes';

export default function calculate(state, value) {
  const { next, operation } = state;

  if (isNumber(value)) {
    if (value === '0' && next === '0') {
      return state;
    }

    if (operation) {
      if (next) {
        return {
          ...state,
          next: next + value,
        };
      }

      return {
        ...state,
        next: value,
      };
    }

    if (next) {
      return {
        ...state,
        next: next + value,
        total: null,
      };
    }

    return {
      ...state,
      next: value,
      total: null,
    };
  }

  if (transformationTypes.includes(value)) {
    return transformations(state, value);
  }

  if (operationTypes.includes(operation)) {
    return {
      next: null,
      operation: value,
      total: operate(state),
    };
  }

  if (!next) {
    return {
      ...state,
      operation: value,
    };
  }

  return {
    next: null,
    operation: value,
    total: next,
  };
}
