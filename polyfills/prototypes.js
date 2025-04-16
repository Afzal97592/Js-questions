const arr = [1, 2, 3, 4, 5];

Object.prototype.myFunc = function () {
  console.log("this function is added to all objects");
};

// arr.myFunc();
let obj = {
  name: "John",
  age: 30,
  city: "New York",
};

// obj.myFunc();

// wee can say
// arr.__proto__ = Array.prototype;
// obj.__proto__ = Object.prototype;

const arr1 = [1, 2, 3, 4, 10];

// forEach

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i);
    }
  };
}

// const ret = arr1.forEach((item, index) => {
//   console.log(` ${item} is at index ${index}`);
// });

// const ret = arr1.myForEach((item, index) => {
//   console.log(`form myForEach function ${item} is at index ${index}`);
// });

// console.log(ret);

// signature .map
// return new array , iterate over each element of the array
// not effect to the original array but return a new array

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      let res = userFn(this[i], i, this);
      newArr.push(res);
    }
    return newArr;
  };
}

let res = arr1.myMap((item, index) => {
  return item * 5;
});

// console.log(res);

// filter
// return new array , iterate over each element of the array
// not effect to the original array but return a new array
// check the conditions

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      let value = userFn(this[i], i, this);
      if (value) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  };
}

myFilterRes = arr1.myFilter((item, i, arr) => item > 3);

// console.log(myFilterRes);

// reduce
// return a single value
// iterate over each element of the array

if (!Array.prototype.mrReduce) {
  Array.prototype.mrReduce = function (userFn, initialValue) {
    let resValue = initialValue;
    for (let i = 0; i < this.length; i++) {
      resValue = userFn(resValue, this[i], i, this);
    }
    return resValue;
  };
}

const reduceRes = arr1.mrReduce((acc, item) => {
  return item + acc;
}, 0);

// console.log(reduceRes);

// push
// push the element to original array and
// return the length of the array

if (!Array.prototype.myPush) {
  Array.prototype.myPush = function (item) {
    this[this.length] = item;
    return this.length;
  };
}

// const pushRes = arr1.myPush(50);
// console.log(pushRes);

// pop

// remove the last element from the array
// return the removed element and
// effect the original array

// let resPop = arr1.pop();
// console.log(resPop); // return the removed element
// console.log(arr1); // return the array after removed last element

if (!Array.prototype.myPop) {
  Array.prototype.myPop = function () {
    let res = this[this.length - 1];
    this.length = this.length - 1;
    return res;
  };
}
// const popRes = arr1.myPop();
// console.log(popRes);
// console.log(arr1);

// shift
// // remove the first element from the array
// return the removed element and
// effect the original array
// const shiftRes = arr1.shift();
// console.log(shiftRes);
// console.log(arr1);

if (!Array.prototype.myShift) {
  Array.prototype.myShift = function () {
    let res = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length = this.length - 1;
    return res;
  };
}

// const shiftRes = arr1.myShift();
// console.log(shiftRes);
// console.log(arr1);

// unshift
// add the element to the first index of the array
// return the length of the array
// effect the original array

//

if (!Array.prototype.myUnShift) {
  Array.prototype.myUnShift = function (item) {
    for (let i = this.length; i >= 0; i--) {
      if (i !== 0) {
        this[i] = this[i - 1];
      } else {
        this[i] = item;
      }
    }
    return this.length;
  };
}
// const unshiftRes = arr1.myUnShift(100);
// console.log(unshiftRes);
// console.log(arr1);

// splice
// signature

// console.log(arr1, "original");

const resSplice = arr1.splice(1, 3, 0, 9, 8, 7, 6);
// console.log(resSplice, "return from splice");
// console.log(arr1, "effected");

if (!Array.prototype.mySplice) {
  Array.prototype.mySplice = function (start, length, ...items) {
    const newArr = [];
    for (let i = start; i <= length; i++) {
      newArr.push(this[i]);
    }

    return newArr;
  };
}

// const spliceRes = arr1.mySplice(1, 3);
// console.log(spliceRes);

// slice
// concat
// join

let arr5 = [1, 3, 4, 1, 2, 5, 9, 7, 6, 5, 2, 4, 3, 2];
