// var removeDuplicates = function (nums) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//       }
//     }
//   }

//   //   const setArr = [...new Set(nums)];

//   //   return setArr;
// };

// console.log("newArr_____", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  let k = 1; // Initialize the unique element count

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // Move unique element to the position k
      k++; // Increment k
    }
  }

  return k;
};

// Example usage:
// const nums1 = [1, 1, 2];
// const k1 = removeDuplicates(nums1);
// console.log(k1); // Output: 2
// console.log(nums1.slice(0, k1)); // Output: [1, 2]

// const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const k2 = removeDuplicates(nums2);
// console.log(k2); // Output: 5
// console.log(nums2.slice(0, k2)); // Output: [0, 1, 2, 3, 4]

var removeDuplicates2 = function (nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return nums.slice(0, k);
};

console.log("newArr___", removeDuplicates2([1, 1, 2]));
