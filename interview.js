function pattern(n) {
  for (let i = 0; i < n; i++) {
    let res = "";
    //  space
    for (let j = 0; j < n - (i + 1); j++) {
      res += "  ";
    }
    // star
    for (let k = 0; k < 2 * i + 1; k++) {
      res += "* ";
    }
    // space
    // useImpretiveHandler
    for (let l = 0; l < n - (i + 1); l++) {
      res += "  ";
    }
    console.log(res);
  }
}
// pattern(5);

// let arr = [1, 1, 2, 3, 2, 1, 1, 4, 5, 2, 3, 4, 5, 6];
// calculate the frequency

function frequency(arr) {
  let obj = {};
  for (let num of arr) {
    if (obj[num]) {
      obj[num] = obj[num] + 1;
    } else {
      obj[num] = 1;
    }
  }
  return obj;
}

// console.log(frequency(arr));

let arr = [1, 2, 1, 2, 3, 4, 2, 5, 3, 2];

function removeDuplicate(nums) {
  // let res = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let isDuplicate = false;
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) {
  //       isDuplicate = true;
  //       break;
  //     }
  //   }
  //   if (!isDuplicate) {
  //     res.push(arr[i]);
  //   }
  // }
  let k = 1;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return nums.slice(0, k);
}

const arrData = [
  {
    id: 1,
    name: "potato",
    category: "vegetable",
  },
  {
    id: 2,
    name: "tomato",
    category: "vegetable",
  },
  {
    id: 3,
    name: "Apple",
    category: "fruits",
  },
  {
    id: 4,
    name: "Banana",
    category: "fruits",
  },
];

const res = arrData.reduce((acc, item) => {
  if (acc[item.category]) {
    acc[item.category] = [...acc[item.category], item];
  } else {
    acc[item.category] = [item];
  }
  return acc;
}, {});

// console.log(res, "resData____!");

var expect = function (val) {
  let obj = {
    toBe: (num) => {
      if (val === num) {
        return {
          value: true,
        };
      } else {
        return {
          error: "Not Equal",
        };
      }
    },
    notToBe: (num) => {
      if (val !== num) {
        return {
          value: true,
        };
      } else {
        return {
          error: "Its Equal",
        };
      }
    },
  };

  return obj;
};

// console.log(expect(5).toBe(5));
// console.log(expect(5).notToBe(5));

var filter = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
};

// console.log(
//   filter([0, 10, 20, 30], function greaterThan10(n) {
//     return n > 10;
//   })
// );

var reduce = function (nums, fn, init) {
  if (nums.length === 0) return init;
  let res = init;
  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }
  return res;
};
// console.log(
//   reduce(
//     [1, 2, 3, 4],
//     function sum(accum, curr) {
//       return accum + curr;
//     },
//     0
//   )
// );

var removeDuplicates = function (nums) {
  nums.sort((a, b) => a - b);
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums);
  return nums.slice(0, k);
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var once = function (fn) {
  return function (...args) {
    let res;
    // for (let i = 0; i < args.length; i++) {
    res = fn(...args);
    return res;
    // }
    // return res;
  };
};

const fn = (a, b, c) => a + b + c;

const data = once(fn);
console.log(data(1, 2, 3), "data+++");
