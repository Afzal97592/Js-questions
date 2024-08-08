function digitCount(num) {
  let updatedNum = num;
  let count = 0;
  while (updatedNum > 0) {
    count++;
    updatedNum = Math.floor(updatedNum / 10);
  }
  return count;
}
// console.log("count is_____", digitCount(2001));

// reverse number
// Ex:- 1234 => 4321
// Ex:- 1000 => 1 not 0001
// Ex:- 1002 => 2001

// dry run
//  num = 0
// take the last digit with modulo
// 1234 => 1234%10 => 4
//  num*10+last digit => 0*10+4=> 4
// now given num is 123 %10 => last digit is => 3 so formula is reverseNum*10+last digit => 4*10+3=> reverseNum is 43
// 12%10 => 2 => 43*10+2 =>430+2 => 432
// 1%10 => 1 => 432*10+1 => 4210+1 => 4321

function reverseNum(num) {
  let newNum = num;
  let reverseNo = 0;
  while (newNum > 0) {
    let lastDigit = newNum % 10;
    reverseNo = reverseNo * 10 + lastDigit;
    newNum = Math.floor(newNum / 10);
  }
  return reverseNo;
}
// console.log("Reverse No is____", reverseNum(1234));
// console.log("Reverse No is____", reverseNum(1002));
// console.log("Reverse No is____", reverseNum(1000));

// palindrome
// Ex:- 121=>121 true
// Ex:- 1331=>1331 true
// Ex:- 1011=>1101 false

function isPalindrome(num) {
  let copyNum = num;
  let duplicate = 0;
  while (copyNum > 0) {
    let lastDigit = copyNum % 10;
    duplicate = duplicate * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }
  return duplicate === num;
}
// console.log(isPalindrome(121));
// console.log(isPalindrome(1331));
// console.log(isPalindrome(1011));

// Armstrong number
// sum of cube of every digit of given no is equal to given num is armstrong num
// Ex :- 371 => 3^3+7^3+1^3 => 27+343 + 1 => 371
// Ex :- 1634 => 1^3+6^3+3^3 +4^3=> 1+216 + 27+64 => 308 not

function isArmstrongNo(num) {
  let copyNum = num;
  let duplicateNum = 0;
  while (copyNum > 0) {
    let lastDigit = copyNum % 10;
    duplicateNum = duplicateNum + lastDigit * lastDigit * lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }
  return duplicateNum === num;
}

// console.log("isArmstrongNo___", isArmstrongNo(135));

// print all divisors of given number
// Ex:- 8=> 1,2,4,8
// Ex:- 12=> 1,2,3,4,6,12

// O(n) => time complexity of this question

// second  method
// 1*36 = 36
// 2*18 = 36  first half
// 3*12 = 36
// 4*9 = 36
// 6*6 = 36-----sqrt
// 9*4 = 36
// 12*3 = 36
// 18*2 = 36 second half
// 36*1 = 36

function printAllDivisor(n) {
  let divisors = "";

  // first method
  // for (let i = 1; i <= n; i++) {
  //   if (n % i === 0) {
  //     divisors += `${i} `;
  //   }
  // }

  // second  method
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors += `${i} `;
      if (n / i !== i) {
        divisors += `${n / i} `;
      }
    }
  }
  return divisors;
  // 7830592357
}
// console.log("divisors___", printAllDivisor(17));

// check is prime or not
//  definition is if number is divided by 1 or itself so its prime number so else not which means prime no have only two factors

function isPrimeNo(n) {
  let count = 0;
  // method 1;
  // for (let i = 1; i <= n; i++) {
  //   if (n % i === 0) {
  //     count++;
  //   }
  // }

  // second method with square root similar to prime no
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (n / i !== i) {
        count++;
      }
    }
  }
  return count === 2;
}
// console.log("isPrimeNo_____", isPrimeNo(23));

// GCD-> greatest common factor

function findGCD(n1, n2) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
// console.log("gcd is___", findGCD(20, 40));

// second method
// gcd(a,b) = gcd(a-b, b) while a>b till one of them become 0 and remaining one will be the gcd
// ex: gcd(5,8) = gcd(3,5) =>gcd(2,3) =>gcd(1,2) =>gcd(1,1) =>gcd(0,1) swapping with greater one and applying formula 5steps
// also gcd(a,b) = gcd(a%b, b) a>b till one of them become 0 and remaining one will be the gcd

// gcd(5,8) =>gcd(8%5, 5) =>gcd(3,5) => gcd(5%3,3) =>gcd(2,3) =>gcd(1,2) =>gcd(0,1) => 1 only 3steps

function findGcd(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a === 0 ? b : a;
}
// console.log(findGcd(12, 16));

var reverse = function (x) {
  // formula is to get reverse
  // revresNum*10+lastdigit
  const MIN = -(2 ** 31);
  const MAX = 2 ** 31 - 1;
  console.log(MIN, MAX);
  let revreseNo = 0;
  if (x < 0) {
    x = -1 * x;
  }
  while (x > 0) {
    let lastDigit = x % 10;
    revreseNo = revreseNo * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  return MIN <= reverseNum && reverseNum <= MAX ? revreseNo : 0;
};

// console.log(reverse(1534236469));

function lcmAndGcd(a, b) {
  //code here
  // formula of gcd(a,b) => gcd(a%b, b) while a>0 and this will run until one of them become 0
  //  formula of lcm = a*b/gcd(a,b)
  function getGcd(x, y) {
    while (x > 0 && y > 0) {
      if (x > y) {
        x = x % y;
      } else {
        y = y % x;
      }
    }
    return x === 0 ? y : x;
  }
  let gcdValue = getGcd(a, b);
  let lcmValue = (a * b) / gcdValue;
  return [lcmValue, gcdValue];
}

// console.log(lcmAndGcd(14, 8));

function sumOfDivisors(N) {
  //your code here
  let sum = 0;
  function sumOfNum(x) {
    let individualSum = 0;
    for (let i = 1; i <= x; i++) {
      if (x % i === 0) {
        individualSum += i;
      }
    }
    // console.log("individualSum___", individualSum);
    return individualSum;
  }

  for (let i = 1; i <= N; i++) {
    sum += sumOfNum(i);
  }
  return sum;
}
// console.log("sum_____", sumOfDivisors(10));

function minJump(arr, n) {
  let jump = 0;
  let y = 0;
  if (arr[0] === 0) return -1;
  for (let i = 0; i < n; i = i + y) {
    if (arr[i] <= n - 1) {
      y = i + arr[i];
      jump++;
    }
  }
  return jump;
}
// console.log("jump_", minJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 11));
console.log("jump_", minJump([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 11));
