//  Question-2 sum of digits of a number

// ex:- 1234 => 1+2+3+4 => 10

// Dry Run With reminder method

// rem = 1234%10 =>rem = 4 and number is 123 => 123%10 =>rem = 3 and number is 12 =>12%10 => rem = 2 and number is 1 =>1%2

function sumOfDigits(n) {
  let rem;
  let sum = 0;
  while (n > 0) {
    rem = n % 10;
    sum += rem;
    n = Math.floor(n / 10);
  }
  return sum;
}
// console.log("Sum of Digits______", sumOfDigits(50001));

// Example Count a numbers of digits
// ex:- 53211 => 5
// ex:- -345 => 3

function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

console.log("number of Digits____", countDigits(-12));
