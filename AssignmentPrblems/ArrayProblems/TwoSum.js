// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
// Example :- nums = [2,7,11,15], target = 9 , output = [0,1]
// Example 2:- nums = nums = [3,2,4], target = 6 output = [1,2]
// Example 3:-nums = [3,3], target = 6, Output: [0,1]

const getTowSum = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const getRes = getTowSum([2, 5, 5, 11], 10);
console.log("two Sum Given array according to target is :", getRes);
