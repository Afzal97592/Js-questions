// [1,2,1,2,2,3,4,5,5,5,5]
// make the object and add the count element according to appearance.

function createObj(arr) {
  let resObj = {};

  for (let elm of arr) {
    if (!resObj[elm]) {
      resObj[elm] = 1;
    } else {
      resObj[elm]++;
    }
  }
  const frequencyArray = Object.values(resObj);
  console.log(frequencyArray);
  for (let i = 0; i < frequencyArray.length; i++) {
    for (let j = i + 1; j < frequencyArray.length; j++) {
      if (frequencyArray[i] === frequencyArray[j]) return false;
    }
  }
  return true;
}
// console.log(createObj([1, 2, 1, 2, 2, 3, 4, 5, 5, 5, 5]));

// reverse array

// [1,2,3,4,5]
function reverseArr(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
// console.log(reverseArr([5, 2, 1, 5, 2, 3]));
// console.log(reverseArr(["A", "B", "C", "D", "E"]));
