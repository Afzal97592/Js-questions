let str = "aabcabacabcabacabcabac";

function stringOperation(str) {
  let res = str.split("");
  let k = 0;
  let sortres = res.sort();
  let arr = [];
  for (let i = 1; i <= sortres.length; i++) {
    if (sortres[i - 1] !== sortres[i]) {
      arr[k] = sortres[i - 1];
      k++;
    }
  }
  return arr.join("");
}
// console.log(stringOperation(str))

let arr = [1, 2, 3, 4, 5];
// if n =  2 then output should be [5,4,1,2,3]

function rotateArray(arr, n) {
  for (let i = 0; i < n; i++) {
    let value = arr.pop();
    arr.unshift(value);
  }
  return arr;
}

// console.log(rotateArray(arr, 2))

let obj = { a: 1, b: { c: 2, d: { e: { f: 3 }, g: 4 } }, h: { i: 5 } };

// out = {a:1, b.c:2, b.d.e.f:3, b.d.g:4, h.i:5}

function flattenObject(obj, parentKey = "") {
  let res = {};
  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : `${key}`;
    if (typeof obj[key] !== "object") {
      res[newKey] = obj[key];
    } else {
      //   Object.assign(res, flattenObject(obj[key], newKey));
      res = {
        ...res,
        ...flattenObject(obj[key], newKey),
      };
    }
  }
  return res;
}

console.log(flattenObject(obj));
