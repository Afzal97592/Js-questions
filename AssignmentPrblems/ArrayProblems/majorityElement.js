// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = (arr) => {
  let count = 0;
  let element = null;
  for (let num of arr) {
    if (count === 0) {
      element = num;
    }
    count += num === element ? 1 : -1;
  }
  return element;
  // let candidate = null;
  // let count = 0;
  // for (let num of arr) {
  //   if (count === 0) {
  //     candidate = num;
  //   }
  //   count += num === candidate ? 1 : -1;
  // }
  // return candidate;
};

const res = majorityElement([2, 2, 1, 1, 1, 1, 1, 2, 2]);
console.log("majorityElement____", res);
