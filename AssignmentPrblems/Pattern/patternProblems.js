//  print pattern
//  * * * *
//  * * * *
//  * * * *
//  * * * *

function printSquarePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// printSquarePattern(4);

// Second
// *
// * *
// * * *
// * * * *
// * * * * *

function printTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// printTrianglePattern(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function printNoTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j <= i; j++) {
      row += `${j + 1} `;
    }
    console.log(row);
  }
}
// printNoTrianglePattern(10);

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

function printNoTrianglePattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row += `${i} `;
    }
    console.log(row);
  }
}

// printNoTrianglePattern2(5);

// * * * * *
// * * * *
// * * *
// * *
// *

// explanation for i ->row j->column
//  i -> j
//  0 -> 5
//  1 -> 4
//  2 -> 3
//  3 -> 2
//  4 -> 1

//  so pattern looking line n-i => for inner loop
// 5-0 =>5
// 5-1 =>4
// 5-2 =>3
// 5-3 =>2
// 5-4 =>1

function printTrianglePattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    // for (j = 5; j > i; j--) {
    //   row += `* `;
    // }
    // second
    for (j = 0; j < n - i; j++) {
      row += `* `;
    }
    console.log(row);
  }
}

// printTrianglePattern2(5);

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// same above approach

function printTrianglePattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (j = 0; j < n - i; j++) {
      row += `${j + 1} `; // or we can start j from 1
    }
    console.log(row);
  }
}

// printTrianglePattern3(5);

// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1
function printTrianglePattern4(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (j = 0; j < n - i; j++) {
      row += `${n - i} `; // or we can start j from 1
    }
    console.log(row);
  }
}

// printTrianglePattern4(5);

//            *
//          * * *
//        * * * * *
//      * * * * * * *
//    * * * * * * * * *

function printPattern5(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row += "  ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "* ";
    }
    for (let l = 0; l < n - i - 1; l++) {
      row += "  ";
    }
    console.log(row);
  }
}
// printPattern5(5);

//    * * * * * * * * *
//      * * * * * * *
//        * * * * *
//          * * *
//            *

function printPattern6(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "  ";
    }
    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      row += "* ";
    }
    for (let l = 0; l < i; l++) {
      row += "  ";
    }
    console.log(row);
  }
}
// printPattern5(4);
// printPattern6(4);

// let sortedSquares = function (nums) {
//   let arr = nums.map((item) => item * item);
//   let resArr = arr.sort((a, b) => a - b);
//   return resArr;
// };
// console.log(sortedSquares([-4, -1, 0, 3, 10]));

// Pattern 7

//             *
//          *  *
//       *  *  *
//    *  *  *  *
// *  *  *  *  *

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row += "  ";
    }
    for (let k = 0; k <= i; k++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern7(5);

// patter -8

// *  *  *  *  *
//    *  *  *  *
//       *  *  *
//          *  *
//             *

// [space start]
//  [0,5] for space => space < i , for start start< (n-i)
//  [1,4]
//  [2,3]
//  [3,2]
//  [4,1]

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "  ";
    }
    for (let k = 0; k < n - i; k++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern8(5);

// pattern-10

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

//  row = 9 so till row 5 inner loop will go to equal to no of row
// but when will reach to row no 6 then inner loop will run n-(i-1) because star is started to decrement

function patter9(n) {
  for (i = 1; i <= n; i++) {
    let starLength = i;
    // if (i >= 6) starLength = n - (i - 1);
    if (i >= Math.floor(n / 2) + 1) starLength = n - (i - 1);
    let row = "";
    for (let j = 1; j <= starLength; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// patter9(7);

// patter 10

// 1             1
// 1 2         2 1
// 1 2 3     3 2 1
// 1 2 3 4 4 3 2 1
// [number, space, number]
// [1,6,1] will be 3 inner loop one for number second for space, third one again for number
// [2,4,2]
// [3,2,3]
// [4,0,4]

function patter10(n) {
  for (let i = 1; i <= n; i++) {
    // number-1
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${j} `;
    }
    // for space
    for (let k = 1; k <= 2 * n - 2 * i; k++) {
      row += `  `;
    }
    // number
    for (let l = i; l >= 1; l--) {
      //  because second no is starting like 4,3,2,1
      row += `${l} `;
    }
    console.log(row);
  }
}
// patter10(9);

// patter -11
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

function patter11(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let printNum = 1;
    if (i % 2 === 0) printNum = 0;
    for (let j = 1; j <= i; j++) {
      row += `${printNum} `;
      printNum = 1 - printNum;
    }
    console.log(row);
  }
}
// patter11(5);

// patter12

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function patter12(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${num} `;
      num = num + 1;
    }
    console.log(row);
  }
}
// patter12(5);

// console.log(String.fromCharCode("A".charCodeAt(0) + 1));

// pattern 13

// A
// A B
// A B
// A B C
// A B C D
// A B C D E
function patter13(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += `${String.fromCharCode("A".charCodeAt(0) + j)} `;
    }
    console.log(row);
  }
}
// patter13(5);
