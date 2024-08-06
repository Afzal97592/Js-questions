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

console.log("isArmstrongNo___", isArmstrongNo(135));
