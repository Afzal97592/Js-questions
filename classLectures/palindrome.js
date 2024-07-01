// palindrome number

//  ex :- 121 => if i write the reverse then its =>121
//  ex :- 221 => if i write the reverse then its =>122 not a palindrome
//  ex :-  -121 => not a palindrome

function isPalindrome(num) {
  let copyNum = num;
  let reverseNum = 0;
  while (copyNum > 0) {
    let rem = copyNum % 10;
    reverseNum = reverseNum * 10 + rem;
    copyNum = Math.floor(copyNum / 10);
  }
  return num === reverseNum;
}

// console.log("Given Number is Palindrome___", isPalindrome(-121));

// fibonacci Number

// Ex :- 0,1,1,2,3,5,8 => Explanation => next number is sum of previous two => 0+1=> 1 => 1 + 1 =>2 => 1+2 => 3 => 2+3 => 5, 3+5 =>8 ................. and so onn.....

function fibonacciNumbers(num) {
  console.log("num___", num);
  let prevNum = 0;
  let current = 1;
  let next;
  if (num < 2) {
    return num;
  }
  for (let i = 2; i <= num; i++) {
    next = prevNum + current;
    prevNum = current;
    current = next;
  }
  return next;
}

console.log("next Fibonacci Num is_____", fibonacciNumbers(5));
