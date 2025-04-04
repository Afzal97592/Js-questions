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
  if (n < 0) return;
  if (n === 0 || n === 1) return 1;
  return factorial(n - 1) * n;
}
// console.log(factorial(10));

// power function (m)^n

function pow(m, n) {
  if (n === 0) return 1;
  return pow(m, n - 1) * m;
}
function mainPow() {
  let m = 2,
    n = 9;

  // let res = pow(m, n);
  let res = pow2(m, n);
  console.log(res);
}

// more optimize  way to calculate power

function pow2(m, n) {
  if (n === 0) return 1;
  if (n % 2 === 0) {
    return pow2(m * m, n / 2);
  } else {
    return m * pow2(m * m, (n - 1) / 2);
  }
}
// mainPow();

// tailor series

function mainTailorSeries() {
  let x = 4,
    n = 15;
  let res = tailorSeries(x, n);
  console.log(res);
}
let p = 1;
let f = 1;
function tailorSeries(x, n) {
  let r;
  if (n === 0) return 1;
  r = tailorSeries(x, n - 1);
  p = p * x;
  f = f * n;
  return r + p / f;
}

mainTailorSeries();
