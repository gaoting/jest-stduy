function sum(a, b) {
  return a + b;
}

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];


function comileError() {
  throw new Error('this is bug, hahahah....')
}

export default{
  sum,
  shoppingList,
  comileError,
}
