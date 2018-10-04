export default function operate(state) {
  const { operation } = state;
  const next = parseFloat(state.next);
  const total = parseFloat(state.total);

  if (operation === '+') {
    return (total + next).toString();
  }

  if (operation === '-') {
    return (total - next).toString();
  }

  if (operation === '*') {
    return (total * next).toString();
  }

  if (operation === '/') {
    return (total / next).toString();
  }

  throw new TypeError(`Unknown ${operation} operation`);
}
