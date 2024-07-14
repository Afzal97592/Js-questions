// learn all about data types and variable on mdn

// let name = "Afzal";
// name = "Ahmad";

// const name1 = "Afzal";
// name1 = "Ahmad";
// console.log(`value is____`, name1);

//  var

// The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

var x = 3;
if (x === 3) {
  x = 4;
  //   console.log("inner value of x: ", x); // out : 4
}
// console.log("inner value of x: ", x); // out : 4
function name() {
  if (x === 3) {
    x = 4;
    console.log("inner value of x: ", x); // out : 4
  }
}
// console.log("outer value of x2: ", x); // out: 3
// name();

for (var a of [1, 2, 3]);
// console.log(a); // out 3 on on let and const it will return error because a not delecleared otu of the scope but when we are giving var so loop is running and last value of loop asining to globally.

// Hoisting

//Declaring a variable anywhere in the code is equivalent to declaring it at the top
// This also means that a variable can appear to be used before it's declared.

// as it appears that the variable declaration is moved to the top of the function, static initialization block, or script source in which it occurs.

//  Ex:-
a = 5;
var a;
// console.log(a);

// Redeclarations :
// Duplicate variable declarations using var will not trigger an error, even in strict mode, and the variable will not lose its value, unless the declaration has an initializer.

var a = 1;
var a = 2;
// console.log(a); // 2
var a;
// console.log(a); // 2; not undefined

var a = 1;
function a() {
  console.log("inner calling__");
}
// a(); // error: a is not a function Explanation in bottom:
// console.log(a); // 1

// var declarations can also be in the same scope as a function declaration. In this case, the var declaration's initializer always overrides the function's value, regardless of their relative position. This is because function declarations are hoisted before any initializer gets evaluated, so the initializer comes later and overrides the value.

// var declarations cannot be in the same scope as a let, const, class, or import declaration.

// var a = 1;
// let a = 2;
// SyntaxError: Identifier 'a' has already been declared

// let a = 1;
// {
//   var a = 5;
// }

// console.log("data___", a); //SyntaxError: Identifier 'a' has already been declared because variable a is declared as with let as a globally

// var a = 1;
// {
//   let a = 5;
// }
// console.log(`check`,a); // out: 1
// will not create the error becouse let is a scope based so let will not take the refrence to out of the scope

// var a, b = a = "A";

// console.log(a,b) // A A

// var x = y,
//   y = "A";
// console.log(x, y); // undefined A

// const z = (y = 1);

// console.log(z, y);

// var x = 0;
// function f() {
//   var x = y = 1; // Declares x locally; declares y globally.
// }
// f();

// console.log(x, y); // 0 1
