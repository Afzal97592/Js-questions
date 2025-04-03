function main() {
  let num = 3;
  fun1(num);
}
main();

function fun1(num) {
  if (num > 0) {
    // console.log(num);
    // fun1(num - 1);

    fun1(num - 1);
    // console.log(num);
  }
}

function main2() {
  let res = fun2(5);
  console.log(res, "res__@");
}

function fun2(num) {
  if (num > 0) {
    return fun2(num - 1) + num;
  } else {
    return 0;
  }
}

// main2();

// with static value

function main3() {
  let res = fun3(5);
  console.log(res, "res__@");
}

let x = 0;
function fun3(num) {
  if (num > 0) {
    x++;
    return fun3(num - 1) + x;
  } else {
    return 0;
  }
}
// main3();

function mainTreeRec(n) {
  if (n > 0) {
    console.log(n);
    mainTreeRec(n - 1);
    mainTreeRec(n - 1);
  }
}

// mainTreeRec(3);

// Indirect recursion

function funA(n) {
  if (n > 0) {
    console.log(n);
    funB(n - 1);
  }
}

function funB(n) {
  if (n > 0) {
    console.log(n);
    funA(n / 2);
  }
}

// funA(20);

// sum of first n natural numbers using recursion

function sumOfNaturalNum(n) {
  let sum = 0;
  if (n > 0) {
    sum += sumOfNaturalNum(n - 1) + n;
  } else {
    return 0;
  }
  return sum;
}

// console.log(sumOfNaturalNum(5), "sumOfNaturalNum");

// factorial of a num using recursion

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(20));
