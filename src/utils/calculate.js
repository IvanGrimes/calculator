import isNumber from './isNumber';
import operate from './operate';

export default function calculate(state, value) {
  const { next, operation, total } = state;

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

  if (value === 'AC') {
    return {
      next: null,
      operation: null,
      total: null,
    };
  }

  if (value === '%') {
    if (total) {
      return {
        next: null,
        operation: null,
        total: parseFloat(total) / 100,
      };
    }

    return {
      next: null,
      operation: null,
      total: parseFloat(next) / 100,
    };
  }

  if (value === '√') {
    return {
      next: null,
      operation: null,
      total: Math.sqrt(next),
    };
  }

  if (value === '.') {
    if (next) {
      if (next.includes('.')) return state;

      return {
        ...state,
        operation: null,
        next: `${next}.`,
      };
    }

    return {
      ...state,
      next: '0.',
    };
  }

  if (value === '=') {
    if (next && operation) {
      return {
        next: null,
        operation: null,
        total: operate(state),
      };
    }

    return state;
  }

  if (value === '+/-') {
    if (next) {
      return {
        ...state,
        next: -1 * parseFloat(next).toString(),
        operation: null,
      };
    }
    if (total) {
      return {
        ...state,
        operation: null,
        total: -1 * parseFloat(total).toString(),
      };
    }
  }

  if (!next) {
    return {
      ...state,
      operation: value,
    };
  }

  if (operation) {
    return {
      next: null,
      operation: value,
      total: operate(state),
    };
  }

  return {
    next: null,
    operation: value,
    total: next,
  };
}
