var moveZeroes = function (nums) {
  let length = nums.length;

  // first approach
  // for(let i=0; i<length; i++){
  //     for(let j=i+1; j<length; j++){
  //         if(nums[i]===0){
  //             let temp = nums[i]
  //             nums[i] = nums[j]
  //             nums[j] = temp
  //         }
  //     }
  // }

  //  second Approach

  let Index = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[Index] = nums[i];
      Index++;
    }
  }
  for (let j = Index; j < length; j++) {
    nums[j] = 0;
  }
  return nums;
};
// console.log(moveZeroes([0, 1, 0, 3, 12]));

var removeElement = function (nums, val) {
  //   let filteredArr = nums.filter((num) => num !== val);
  //   return filteredArr.length;

  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  //   return nums.slice(0, k);
  return k;
};

// console.log(removeElement([3, 2, 2, 3], 3));

// consecutive count
var findMaxConsecutiveOnes = function (nums) {
  let FinalCount = 0;
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      count++;
    } else {
      FinalCount = Math.max(FinalCount, count);
      count = 0;
    }
  }
  return FinalCount > count ? FinalCount : count;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1]));
