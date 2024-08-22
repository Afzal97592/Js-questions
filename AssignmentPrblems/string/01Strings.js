// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.

// Constraints:

// 1 <= num.length <= 105
// num only consists of digits and does not contain any leading zeros.

var largestOddNumber = function (num) {
  // using javscript inbuilt methods
  let newNum = +num;
  let max = -Infinity;
  if (newNum % 2 === 0) {
    while (newNum > 0) {
      let rem = newNum % 10;
      if (rem > max && rem % 2 !== 0) {
        max = rem;
      } else {
        max = "";
      }
      newNum = Math.floor(newNum / 10);
    }
  } else if (num % 2 !== 0) {
    return num;
  } else {
    return (max = "");
  }
  return max.toString();
};

function largestOddNumber(num) {
  // Iterate from the last character to the first
  for (let i = num.length - 1; i >= 0; i--) {
    // Check if the character is an odd digit
    if (parseInt(num[i]) % 2 !== 0) {
      // Return the substring from the start to the current odd digit
      return num.slice(0, i + 1);
    }
  }
  // If no odd digit is found, return an empty string
  return "";
}

// console.log("largestOdNumber", largestOddNumber("52"));

function longestCommonPrefix(strs) {
  // get lowest char because common prefix can be till lowest char equal logically
  let lowestLengthWord = strs.map((item) => item.length);
  let length = Math.min(...lowestLengthWord);
  let prefix = "";
  for (let i = 0; i < length; i++) {
    // to pick the char of first word in array
    let currentChar = strs[0][i];
    // inner loop for other words
    for (let j = 1; j < strs.length; j++) {
      // to pick the char of other words and comparison with current char
      if (currentChar !== strs[j][i]) {
        // if not matched then return the till got prefix
        return prefix;
      }
    }
    // else add continue to remaining chars
    prefix += currentChar;
  }
  return prefix;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"

// rotation string given string is qual to goal string or not after some shift move

function rotation(str, goal) {
  let res = str;
  for (let i = 0; i < str.length - 1; i++) {
    res = rotation2(res);
    if (res === goal) {
      return true;
    }
  }
  return false;
}
function rotation2(str) {
  let res = str;
  res = str.slice(1) + str[0];
  return res;
}
console.log("res___", rotation("abcde", "cdeab"));
console.log("res___", rotation("abcde", "abced"));
