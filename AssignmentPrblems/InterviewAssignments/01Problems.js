// write a function called compute

// let input = {
//   A: (a, b, c) => a + b + c,
//   B: (a, b, c) => a - b - c,
//   C: (a, b, c) => a + b * c,
//   D: {
//     E: (a, b, c) => a + b + c,
//   },
// };
// compute(1,1,1)
// output should be
// const output={
//     A:res,
//     B:res,
//     C:res,
//     D:{
//         E:res
//     }
// }

// function compute(a, b, c) {
//   const keys = Object.keys(input);
//   let outputObj = {};
//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     console.log(input[key]);
//     outputObj = {
//       [key]: input[key](a, b, c),
//     };
//   }

//   return outputObj;
// }
// console.log("Out is: ", compute(1, 1, 1));

let input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a + b * c,
  D: {
    E: (a, b, c) => a + b + c,
  },
};

// answer should be {
// A:res,
// B:res,
// C:res,
// D:{
//    E:res,
// }
// }

function compute(obj, a, b, c) {
  let resObj = {};
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      resObj[key] = obj[key](a, b, c);
    } else {
      resObj[key] = compute(obj[key], a, b, c);
    }
  }
  return resObj;
}

console.log(compute(input, 1, 1, 1));
