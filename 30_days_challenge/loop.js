// Task-1 : write a program to print the number from 1 to 10 using for loop

function printNumber() {
  for (let i = 1; i <= 10; i++) {
    console.log(`Number: ${i}`);
  }
}
// printNumber();

// Task 2:- multiplication table of 5

function multiplicationTable(num) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${num} * ${index} = ${num * index}`);
  }
}
// multiplicationTable(5);

// Task 3:- write a program to calculate the sum from 1 to 10 using while loop

function calculateSum(from, to) {
  let sum = 0;
  let i = from;
  while (i <= to) {
    sum += i;
    i++;
  }
  return sum;
}

// console.log(`The sum is: ${calculateSum(1, 10)}`);

// Task 3:- write a program to print the num from 10 to 1 using while loop

function printNum(num) {
  while (num >= 1) {
    console.log(`Number is: ${num}`);
    num--;
  }
}
// printNum(10);

// Task 5:- print the number using do while loop

function PrintNumWithDoWhile(num) {
  let i = 1;
  do {
    console.log(`The number is: ${i}`);
    i++;
  } while (i <= num);
}
// PrintNumWithDoWhile(5);

// Task 6:- write a program to calculate the factorial of a number using do while loop

// Ex: 5! => 5*4*3*2*1
// Ex: 3! =>3*2*1

function calculateFactorial() {
  let fact = num;
  console.log("cff___", fact);
  if (num === 0 || num === 1) return 1;
  do {
    fact *= num - 1;
    num--;
  } while (num > 1);
  return fact;
}

// console.log(`Factorial of Given Num : ${calculateFactorial(-1)}`);

// Task 6:- print the pattern
//  *
//  *  *
//  *  *  *
//  *  *  *  *
//  *  *  *  *  *

//          *
//           *  *
//        *  *  *
//     *  *  *  *
//  *  *  *  *  *

function printPattern() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
      process.stdout.write("  ");
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
// printPattern();

// Task 7:- print the number 1 to 10 and skip the 7  using continue

function printSkipNum() {
  for (let i = 1; i <= 10; i++) {
    // if (i === 7) continue;
    // console.log(`Number is: ${i}`);
    if (i === 7) break;
    console.log(`Number is: ${i}`);
  }
}
printSkipNum();
