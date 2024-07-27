function primeNum(arr) {
  const primeArr = arr.filter(isPrime);
  console.log(primeArr);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

primeNum([0, 1, 2, 4, 3, 5, 7, 9, 23, 11, 13]);
