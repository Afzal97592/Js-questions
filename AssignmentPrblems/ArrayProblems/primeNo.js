const { FaJ } = require("react-icons/fa6");

function primeNum(arr) {
  const primeArr = arr.filter(isPrime);
  console.log(primeArr);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// primeNum([0, 1, 2, 4, 3, 5, 7, 9, 23, 11, 13]);

//  second largest num

function getSecondLargestNo(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr[arr.length - 2];
}

// console.log(getSecondLargestNo([5, 1, 0, -1, 2, 4]));

var removeDuplicates2 = function (arr) {
  let nums = arr.sort((a, b) => a - b);

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return nums.slice(0, k);
};

// console.log(removeDuplicates2([0, 1, 0, 2, 1, 2, 3, 4, 3, 4]));

const secondLargest = (arr) => {
  if (arr.length < 2) return false;

  // brute force method
  // this  approach has O(n) *O(n) => O(n^2) time complexity
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] > arr[j]) {
  //       let temp = arr[j];
  //       arr[j] = arr[i];
  //       arr[i] = temp;
  //     }
  //   }
  // }

  // return arr[arr.length - 2];

  // second approach
  //  this have only O(n) complexity because of only n iteration

  // let firstLargest = -Infinity;
  // let secondLargest = -Infinity;
  // for (let num of arr) {
  //   if (num > firstLargest) {
  //     secondLargest = firstLargest;
  //     firstLargest = num;
  //   } else if (num > secondLargest && num !== firstLargest) {
  //     secondLargest = num;
  //   }
  // }
  // return secondLargest;

  //  third approach

  //  so O(n) +O(n) +O(n) => o(3n) => O(n)

  let largestNum = Math.max(...arr); //O(n)
  let filteredArr = arr.filter((item) => item !== largestNum); // O(n)
  let secondLargestNum = Math.max(...filteredArr);
  return secondLargestNum; // O(n)
};
console.log(secondLargest([4, 3, 2, 9, 20, 19]));
