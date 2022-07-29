const isPrime = n => {
  const limit = n ** 0.5;
  for (let i = 2; i < limit; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
};

const number = 600851475143;
const limit = parseInt(number ** 0.5);

let i = 0;
for (i = limit; i > 0; i--) {
  if (number % i === 0 && isPrime(i)) break;
}
console.log(i > 1 ? i : number);
