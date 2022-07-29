const limit = 1000;
const mul3 = parseInt((limit - 1) / 3);
const mul5 = parseInt((limit - 1) / 5);
const mul15 = parseInt((limit - 1) / 15);

const result =
  (3 * mul3 * (mul3 + 1)) / 2 + (5 * mul5 * (mul5 + 1)) / 2 - (15 * mul15 * (mul15 + 1)) / 2;

console.log(result);
