import operate from './operate';
import {
  AC,
  EQUAL,
  CHANGE_SIGN,
  FLOAT,
  SQRT,
  PERCENT,
} from '../constants/transformationTypes';

// eslint-disable-next-line consistent-return
export default function transformations(state, value) {
  const { next, operation, total } = state;

  switch (value) {
    case AC:
      return {
        next: null,
        operation: null,
        total: null,
      };
    case PERCENT:
      return total ? {
        next: null,
        operation: null,
        total: (parseFloat(total) / 100).toString(),
      } : {
        next: null,
        operation: null,
        total: (parseFloat(next) / 100).toString(),
      };
    case SQRT:
      return {
        next: null,
        operation: null,
        total: Math.sqrt(next).toString(),
      };
    case FLOAT:
      if (next && next.includes('.')) return state;
      if (total && !operation) return state;

      return next ? {
        ...state,
        next: `${next}.`,
      } : {
        ...state,
        next: '0.',
      };
    case EQUAL:
      return next && operation ? {
        next: null,
        operation: null,
        total: operate(state),
      } : {
        ...state,
      };
    case CHANGE_SIGN:
      if (next) {
        return {
          ...state,
          next: -1 * parseFloat(next).toString(),
        };
      }
      if (total) {
        return {
          ...state,
          total: -1 * parseFloat(total).toString(),
        };
      }
      break;
    default:
      throw new TypeError(`Unknown ${value} transformation`);
  }
}
