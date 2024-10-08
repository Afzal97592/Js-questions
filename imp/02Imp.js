// has context menu
// FRONTEND INTERVIEW PARAMETERS (Applicable for both rounds)

// - Brief introduction

// - How you got into frontend development

// - Recent Projects

// - Challenges faced during projects creation

// - How you came up with a solution

// - File structure

// - What are the things you consider while creating a project?
// - Have to check the behavior, communication and learning attitude.

// React :-

// - Lifecycle methods both functional components and class components.

// - State and Props

// ---------------- Hooks --------------------//
// In React, a hook is a special function that lets you "hook into" React features and lifecycle methods from within a functional component.

// Rules of Hooks: Hooks can only be called at the top level of a functional component or within another hook. They cannot be called inside loops, conditions, or nested functions.

// - useEffect, useState - for beginners

// - useMemo, useLayoutEffect, useCallback, useRef, useReducer - for advanced

// useLayoutEffect
// useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
// perform the layout measurements before browser repaints the screen

// useMemo :- useMemo nothing just cached the result of calculation between rerenders
// means if we are handling any expensive calculation so we can make that expensive calculation inside a useMemo which will cached the result of that calculation if nothing is changing in the result.

// useCallback :- useCallback cached a function between re-render component
// const cacheFn = useCallback(()=>{},[dependencies])
// suppose i am passing a function as props to child and handling any functionality in parent so on every re-render that not create the new reference of that function thats why we use the useCallback.

// useRef -
// useRef is a hook that provides a way to create the mutable reference that persist across re-renders. means updating a useRef value dose not trigger a re renders of a components.

//it commonly used to directly interact with dom element or  keep reference to a mutable values that dose not require a re-rendering

// - Prop Drilling

// - Passing data from child ->parent & vice versa
// parent to child using prop drilling
// child to parent using state lifting up using callback

// - Context api
//  handle the state management globally means when we are passing props from parent to child tree or child to parent so this is not a gud way we also can create the context globally and also can handle the both side state management using context api

// Redux :-

// - useSelector, useDispatch,

// - Core Working of redux

// JAVASCRIPT

// - PROMISE
// It provides a way to handle the asynchronous operation more efficiently by allowing you attached callback for success (.then) and failure(.catch)
// promise can be one of three states Pending, resolved, Rejected

// - CLOSURE

// - HOISTING

// - event loop

// - async await
// the word async before a function means is the function will return the promise.
// Other values are wrapped in a resolved promise automatically.
// async function f() {
//     return 1;
//   }
//   f().then(alert); // 1

// The key word wait means the javascript wait until and unless promise settles and returns the result

// - callback hell

// - Array methods - map, filter, foreach, reduce

// - LET,VAR,CONST Difference

// - Spread operator, Ternary operator

// Rest operator:- A function can be call with any numbers of arguments
//  means if i am calling function

// function sumAll(...args) { // args is the name for the array
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// alert( sumAll(1) ); // 1
// alert( sumAll(1, 2) ); // 3
// alert( sumAll(1, 2, 3) ); // 6

// - Login, Register functionality

// - String methods - toString, toUppercase, split, toFixed,

// - Destructuring array and object both

// - setTimeout, setInterval

// ADVANCED LEVEL JAVASCRIPT

// polyfill for map, filter, reduce

// Polyfill for map :-
Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};
const nums = [1, 2, 3, 4];
let res = nums.myMap((ele, i, arr) => {
  return ele * 2;
});
// console.log("res____", res);

// filter polyFill

Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const myFilterRes = [1, 2, 3, 4].myFilter((ele, i, arr) => ele > 1);
// console.log("myFilterRes___", myFilterRes);

// reduce polyFill

Array.prototype.myReduce = function (cb, acc) {
  let res = acc;
  for (let i = 0; i < this.length; i++) {
    res = cb(res, this[i]);
  }
  return res;
};

const myArr = [2, 4, 5, 6];
const myReduceResult = myArr.myReduce((acc, elem) => acc * elem, 1);
// console.log("myReduceResult", myReduceResult);

// debouncing - delaying the response
// delaying response on functionality suppose making query on search so after enter the last key of api make the callafter certain given time

// throttlling
// handle any functionality with given certain time.

// memoization
// used for optimization applications means if we are handling expensive calculations then its cache the result.

// Event Delegation
// So event delegation is a technique where instead of attaching every event listener to every  individual element we  attached a event listener to parent element.

// Imagine you have a list with multiple items, and you want to handle clicks on each item. Instead of adding a click listener to every single item, which could make the code bulky and harder to manage, you attach the listener to the parent element, like the ul. Then, when any item in the list is clicked, the event bubbles up to the parent, and we handle it there. This keeps the code clean and improves performance, especially when you're dealing with dynamic elements that might be added or removed later."

// Event Propagation

// Event propagation in JavaScript describes how an event travels through the DOM after being triggered. It happens in three phases: capturing, target, and bubbling.

// - First is the capturing phase, where the event moves down from the root to the target element, almost like it's getting ready to trigger.

// - Then comes the target phase, where the event actually triggers on the specific element, say a button click.

// - Finally, there's the bubbling phase, where the event bubbles back up the DOM tree, allowing parent elements to also respond to that event.

// Temporal Deadzone
// - Temporal Dead Zone (TDZ) refers to the period when a variable is declared but not yet initialized.
// - it applies on let and const variables in block scope
// - so if we try to access the variables in TDZ it will through the reference error.

// Lexical Scope

// Lexical scope, refers to the visibility of variables based on their position in the source code. In JavaScript, the scope of a variable is determined at the time of writing the code, not at runtime.

// Variable Shadowing
//  nothing just suppose when we declared the variable in outer scope and then with same name we declared in inner scope then inner scope access the inner declared variable on outer declared variable outer declared variable got the shadow

// setTimeout

// call, bind, apply

// currying
//  - currying is a functional programming technique that transformed a function to take the the multiple arguments into a series of function that take the single arguments

// Ex:-
function add(a) {
  return function (b) {
    return a + b;
  };
}
// const res1 = add(2);
// const res2 = res1(3);
// console.log(res2);
//  or
// console.log(add(2)(6));

// Infinite currying
// - Infinite currying is an extension of currying that allows a function to be called multiple times without specific limit, returning the intermediate result until a termination conditione meet

function add(a) {
  return function (b) {
    if (b === undefined) return a; // Termination condition
    return add(a + b);
  };
}
// console.log(add(2)(4)(5)());

// Implement Promise.all()
// Promise.all() - is a method suppose when we are handling so many promises paralleley so promise.all takes an array of all promises and return a single promise and if all of them resolved then its resolve the promise else if any of them rejected then it reject the the promise

function fetchUserData() {
  return fetch("https://api.example.com/user").then((response) =>
    response.json()
  );
}

function fetchPostsData() {
  return fetch("https://api.example.com/posts").then((response) =>
    response.json()
  );
}

function fetchCommentsData() {
  return fetch("https://api.example.com/comments").then((response) =>
    response.json()
  );
}

// Promise.all([fetchUserData(), fetchPostsData(), fetchCommentsData()])
//   .then(([userData, postsData, commentsData]) => {
//     console.log("User Data:", userData);
//     console.log("Posts Data:", postsData);
//     console.log("Comments Data:", commentsData);
//   })
//   .catch((error) => {
//     console.error("One of the API calls failed:", error);
//   });

// Implicit and explicit binding

// Implicit Binding - it happen automatically when we invoked a function as a method of an object means
const user = {
  name: "Afzal",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
// user.greet();
// so here this is referring  object to it self

// Explicity binding - Explicitly binding allow us to set the this value \ manually to the function using call, apply, bind methods
// so this is gives the more control to us

function greet() {
  console.log(`Hello ${this.name} morning`);
}
let person1 = { name: "Afzal" };
let person2 = { name: "Ahmad" };
// greet.call(person1);
// greet.call(person2);
greet.apply(person1, ["hey", "how are  you", "?"]);
// const bindMethod = greet.bind(person1);
// bindMethod();
// bind method return the  function

// First Class functions
// In JavaScript, functions are treated as first-class citizens (or first-class objects). This means that functions in JavaScript are just like any other variable. They can be:

// - Assigned to a variable.
// - Passed as an argument to another function.
// - Returned from a function.
// - Stored in data structures like arrays and objects.
// - Simply put, in JavaScript, a function can do anything that any other object or variable can do.

function greet(name) {
  return "Hello, " + name;
}

const greetFunction = greet;
// console.log(greetFunction("John")); // Output: "Hello, John"

function greet(name) {
  return "Hello, " + name;
}

function sayGreeting(greetFn, name) {
  console.log(greetFn(name));
}

// sayGreeting(greet, "Alice"); // Output: "Hello, Alice"
function createGreeting(greeting) {
  return function (name) {
    return greeting + ", " + name;
  };
}

const sayHello = createGreeting("Hello");
// console.log(sayHello("Bob")); // Output: "Hello, Bob"

// Execution Context

// Scoping

// CSS

// - What are semantic Tags
// Header, nav, main, article, aside, mark, footer and many ore which help to understand the structure of web page.

// - Rem and em
// Relative to Parent Element: The em unit is relative to the font size of the element’s parent. This means that if you set an element’s size using em, it will be calculated based on the font size of the element's parent.
// if parent font size is 20px and child using 2rem then it will be 2*20px => 40px

// Relative to Root Element: The rem unit stands for "root em" and is relative to the root element’s (<html>) font size, typically set using html { font-size: ... }. This makes rem consistent across the entire document regardless of where it’s used.
// 1rem => 16px

// - id and class
// uniqueness  and reusablity

// - div and span

// - different ways to center a div

// - How can we make website Responsive

// - flex vs grid

// - z index

// - absolute vs relative postitioning

// - box modal

// - margin vs padding

// - inline vs block elements

// - can we use two classes in a div
// yes

// - !important mean in CSS?
// higher priority

// - colspan
// related to th, td which specify the colum of any table cell

// - specificity
// Specificity is calculated based on the types of selectors used in the CSS rule. It's represented by a four-part value (a, b, c, d):
// Inline styles: (1,0,0,0) – Highest specificity
// IDs: (0,1,0,0)
// Classes, attributes, pseudo-classes: (0,0,1,0)
// Elements, pseudo-elements: (0,0,0,1)

// - Animations - hover

// - SASS

// - Block element modifier conventions

// - Ui Libraries like Material UI, Tailwind, Bootstrap

// TASKS

// - What is the output of console.log(3>2>1)

// console.log(a);

// console.log(b);

// console.log(c);

// var a = 10;

// let b = 20;

// const c = 30;

// - Code 1:

// function func1(){

// setTimeout(()=>{

// console.log(x);

// console.log(y);

// },3000);

// var x = 2;

// let y = 12;

// }

// func1();

// - Code 2:

// function func2(){

// for(var i = 0; i < 3; i++){

// setTimeout(()=> console.log(i),2000);

// }

// }

// func2();

// function func2(){

// for(let i = 0; i < 3; i++){

// setTimeout(()=> console.log(i),2000);

// }

// }

// func2();

// - Code 3:

// (function(){

// setTimeout(()=> console.log(1),2000);

// console.log(2);

// setTimeout(()=> console.log(3),0);

// console.log(4);

// })();

// let arr = [1,2,3]

// replace the second element with "One"

// GITHUB

// - Basic commands like git add, git commit , git push(For Beginners )

// - Creating a branch and pushing code to it
// - Raise a Pull Request
// has context menu

// [6:10 PM] Pankaj  Kumar
// Yahi puchta hu

// [6:11 PM] Hanzala Ansari
// badhiya hai.

// [6:12 PM] Pankaj  Kumar
// aur sath me
// //1 What is the output of
// console.log(3>2>1)
// console.log("" == [null])]
// true because type check is loosly
// console.log(2 * null);
// null is a falsy value so 2*0 =>0

// //2. GUess the output
// var x = 3;
// var y = "4";
// console.log(x+y)

// //3. Fixed the error in the code
// func2();
// abc();

// function func2(){
// for(let i = 0; i < 3; i++){
// setTimeout(()=> console.log(i),2000);
// }
// }

// const abc = func3=()=> {
// for(var i = 0; i < 3; i++){
// setTimeout(()=> console.log(i),2000);
// }
// }

// //4 use getter method to console the name Monica
// const student = {

// firstName: 'Monica',
// get getName() {
// return this.firstName;
// }
// }
// student.getName getter method allow to use getname as property
// //5. Destructure the city name bangalore
// const user = {
// 'name': 'Alex',
// 'address': '15th Park Avenue',
// 'age': 43,
// 'department':{
// 'name': 'Sales',
// 'Shift': 'Morning',
// 'address': {
// 'city': 'Bangalore',
// 'street': '7th Residency Rd',
// 'zip': 560001
// }
// }
// }

// const { department: { address: { city } } } = user;

// console.log(city); // Outputs: Bangalore

// //6. remove element 4 from arr
// const arr = [1,2,3,4,5]

// Centre the div using position property
// !DOCTYPE html>

// <html>

// <head>

// <style>

// div.relative {

//   position: relative;

//   width: 100vw;

//   height: 100vw;

// background-color:red;

// }

// div.absolute {

//   position: absolute;

// background-color:blue;

//   width: 20rem;

//   height: 20rem;

// }

// </style>

// </head>

// <body>

// <div class="relative">

// <div class="absolute"></div>

// </div>

// </body>

// </html>

// [6:12 PM] Pankaj  Kumar
// React
// function update(){
// setCounter(counter +1)
// setCounter(counter +1)
// setCounter(counter +1)
// }

// 2
// const [data,setData] =useState({name:'',gender:'',Age:''})
// var response = {name:'x',gender:'x',mob:'xx',dob:'cc'}

// Baaki ref, cleanup function, usememo, callback,redux, inme se kuch
