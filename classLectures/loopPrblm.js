// Question 1: sum of all natural numbers from 1 to n

function sumOneTwoN(n) {
  //     // first approach
  //   let sum = 0;
  //   for (let i = 1; i <= n; i++) {
  //     sum += i;
  //   }
  //   return sum;

  // second approach
  return (n * (n + 1)) / 2;
}

const sumOfAllNumbers = sumOneTwoN(100);
console.log("sum of All given Numbers___", sumOfAllNumbers);
