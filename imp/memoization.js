// memoization is  form of caching

function memoizedSum() {
  let result = {};
  return function (n1, n2) {
    if (result[`${n1},${n2}`]) {
      console.log("from cache");
      return result[`${n1},${n2}`];
    }
    console.log(result);
    const sumResult = n1 + n2;
    result[`${n1},${n2}`] = sumResult;
    console.log("outsise");
    return sumResult;
  };
}

// const sum = memoizedSum();
// console.log(sum(2, 3));
// console.log(sum(1, 2));
// console.log(sum(2, 3));
// console.log(sum(1, 2));
// console.log(sum(3, 2));

// reusable thing using higher order function

function memoize(fn) {
  let result = {};
  return function (...args) {
    if (result[args]) {
      console.log("from cache");
      return result[args];
    }
    const res = fn(...args);
    result[args] = res;
    return res;
  };
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// const memoizedFibonacci = memoize(fibonacci);
// console.time("fibonacci");
// console.log(memoizedFibonacci(43));
// console.timeLog("fibonacci");
// console.log(memoizedFibonacci(43));
// console.timeLog("fibonacci");
// console.log(memoizedFibonacci(43));
// console.timeLog("fibonacci");

// another approach

function fib(n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) return n;

  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}

// console.time("fibonacci");
// console.log(fib(43));
// console.timeLog("fibonacci");
// console.log(fib(43));
// console.timeLog("fibonacci");
// console.log(fib(43));
// console.timeLog("fibonacci");
// console.log(fib(43));
// console.timeLog("fibonacci");




