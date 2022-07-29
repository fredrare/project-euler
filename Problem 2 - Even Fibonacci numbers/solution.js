const sq5 = 5 ** 0.5;
const phi = (sq5 + 1) / 2;
const fib = n => Math.round(phi ** n / sq5);

const limit = 4000000;

let temp = 0;
let sum = 0;
for (let i = 3; (temp = fib(i)) < limit; i += 3) {
  sum += temp;
}

console.log(sum);
