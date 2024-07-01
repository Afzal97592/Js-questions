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

// console.log("next Fibonacci Num is_____", fibonacciNumbers(5));

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

var missingNumber = function (nums) {
  let getTheSumOfNaturalNumbersInRange = (nums.length * (nums.length + 1)) / 2;

  //  get the sum of given arrray digites
  let sum = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     sum += nums[i];
  //   }

  //  another method instead of loop

  sum = nums.reduce((acc, num) => acc + num, 0);

  return getTheSumOfNaturalNumbersInRange - sum;
};

console.log("Missing no in given arr is______", missingNumber([0, 2]));
