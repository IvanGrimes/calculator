export default function operate(state) {
  const { operation } = state;
  const next = +state.next;
  const total = +state.total;

  if (operation === '+') {
    return total + next;
  }

  if (operation === '-') {
    return total - next;
  }

  if (operation === '*') {
    return total * next;
  }

  if (operation === '/') {
    return total / next;
  }

  return state;
}
