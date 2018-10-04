import {
  PLUS,
  MINUS,
  DIVINE,
  MULTIPLY,
} from '../constants/operationTypes';

export default function operate(state) {
  const { operation } = state;
  const next = parseFloat(state.next);
  const total = parseFloat(state.total);

  switch (operation) {
    case PLUS:
      return (total + next).toString();
    case MINUS:
      return (total - next).toString();
    case MULTIPLY:
      return (total * next).toString();
    case DIVINE:
      return (total / next).toString();
    default:
      throw new TypeError(`Unknown ${operation} operation`);
  }
}
