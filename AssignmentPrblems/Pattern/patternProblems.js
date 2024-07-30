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
printPattern5(4);
printPattern6(4);
