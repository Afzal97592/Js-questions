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

// - Prop Drilling

// - Passing data from child ->parent & vice versa

// - Context api

// Redux :-

// - useSelector, useDispatch,

// - Core Working of redux

// JAVASCRIPT

// - PROMISE

// - CLOSURE

// - HOISTING

// - event loop

// - async await

// - callback hell

// - Array methods - map, filter, foreach, reduce

// - LET,VAR,CONST Difference

// - Spread operator, Ternary operator

// - Login, Register functionality

// - String methods - toString, toUppercase, split, toFixed,

// - Destructuring array and object both

// - setTimeout, setInterval

// ADVANCED LEVEL JAVASCRIPT

// polyfill for map, filter, reduce

// debouncing - delaying the response

// throttlling

// memoization

// Event Delegation

// Event Propagation

// Temporal Deadzone

// Lexical Scope

// Variable Shadowing

// setTimeout

// call, bind, apply

// Infinite currying

// Implement Promise.all()

// Implicit and explicit binding

// First Class functions

// Execution Context

// Scoping

// CSS

// - What are semantic Tags

// - Rem and em

// - id and class

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

// - !important mean in CSS?

// - colspan

// - specificity

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
// console.log("" == [null])
// console.log(2 * null);

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
