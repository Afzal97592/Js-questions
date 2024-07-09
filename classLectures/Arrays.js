// Array collection of items

// const arr = [];
// const arr2 = new Array();
// console.log(arr, arr2);

// indexing  start from 0

// there are multiple methods like pop, push, shift, unshift, splice, slice, length and many more.

const arr = [2, 3, 5, 6, 9];

// arr.splice(1, 2, { name: "Afzal" }, { Age: 23 });
// const newSpliceArr = arr.splice(1, 0, { name: "Afzal" }, { Age: 23 });
// arr.splice(1, 3);

// console.log("arrRes_____", newSpliceArr, arr);

// difference between splice and slice

const subArr = arr.slice(1, 3); // [start, end)  means in method given arguments will include the first index but in end last index wil exclude means last given index se ek kum index tak array return karega

// slice dosn't change the original array give the subArray from original array according to arguments

// splice effect the original array means change the original array according to given arguments in method
// console.log("subArr__", subArr, arr);

// Arrays copy in javascript
// 1. shallow copy
// 2. deep copy

// 1.shallow copy

const arrB = arr;
// console.log(arrB === arr);
// console.log(arrB, arr);
// arrB.push({ isEqual: true });
//  so adding the element in both arr at the last because both array are referring to same reference.
// console.log(arrB, arr);

// deep copy

const arrC = [...arr];
arrC.push({ deepCopy: "checkDeepCopy" });
// console.log(arr, arrC);

const isArrEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// console.log("isArrEqual____", isArrEqual([1, 2, 3], [1, 2, 3]));
// console.log("isArrEqual____", isArrEqual([1, 2, 3], [1, 2]));
// console.log("isArrEqual____", isArrEqual([1, 2, 3], [1, 2, 5]));

// Flat method

const newArr = [1, 2, [3, 4, [5, 6, [7, 8, 9]]]];

const flatArr = newArr.flat(3);
// console.log("flatArr___", flatArr);

// filter vs find

const x = [-9, -4, -5, 0, 3, 1, 7];

const newX = x.filter((elm, i) => elm > 0);
// console.log("FilterOutput___", newX); //[ 3, 1, 7 ]

const newX2 = x.find((elm, i) => elm > 0);

// console.log("findOutput___", newX2); //findOutput___ 3

// so filter return the all satisfied condition values array
// while find return the first condition satisfied

var a = {};
b = { key: "b" };
c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);
