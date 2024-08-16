// What are closures in javaScript

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// in other words

// In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function init() {
  var name = "Mozilla2"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  return displayName;
}
const myClosure = init();
// myClosure();

// Note:-

// init() creates a local variable called name and a function called displayName().
// The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function.
// Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

// and in this particular example, the scope is called a function scope, because the variable is accessible and only accessible within the function body where it's declared.

// JavaScript only had two kinds of scopes: function scope and global scope. Variables declared with var are either function-scoped or global-scoped, depending on whether they are declared within a function or outside a function. This can be tricky, because blocks with curly braces do not create scopes:

if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
// console.log(x);

// In ES6, JavaScript introduced the let and const declarations, which, among other things like temporal dead zones, allow you to create block-scoped variables.

if (Math.random() > 0.5) {
  const y = 1;
} else {
  const y = 2;
}
// console.log(y); // ReferenceError: x is not defined

// --------------Promises---------------//

// Explain the concept of promises in javascript

// promises is the powerful way to handle the asynchronous operation in javascript

//before promises, JavaScript used callbacks to handle asynchronous tasks like network requests, file reading, or timers. Callbacks worked, but they had a downside—if you had multiple asynchronous operations dependent on each other, you would end up with deeply nested callbacks, often referred to as "callback hell." This made the code hard to read, maintain, and debug.

// Promises were introduced to address this problem by providing a more structured and readable way to handle asynchronous operations.

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A promise can be in one of three states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// Creation of a Promise:

// A promise is created using the Promise constructor, which takes a function as an argument (called the executor). This executor function takes two arguments: resolve and reject.
// You use resolve when your asynchronous task completes successfully, and you pass the result to it.
// You use reject when the task fails, passing the error.

const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const success = true; // Change to false to simulate failure
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  }, 1000);
});

// Using a Promise:

// Once a promise is created, you can use .then() to handle the resolved value, and .catch() to handle any errors.
// .then() takes two arguments: one for success and one for failure, but typically you use .catch() for handling errors separately.

myPromise
  .then((result) => {
    // console.log(result); // "Operation was successful!"
  })
  .catch((error) => {
    // console.log(error); // "Operation failed."
  });

//   3. Chaining
myPromise
  .then((result) => {
    // console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve("Next operation complete!"), 1000);
    });
  })
  .then((nextResult) => {
    // console.log(nextResult); // "Next operation complete!"
  })
  .catch((error) => {
    console.log(error);
  });

//   Why Promises are Important?
// Readability: Promises make asynchronous code look more like synchronous code, improving readability and reducing complexity.
// Error Handling: Promises provide a centralized place for handling errors using .catch(), making error management more straightforward.
// Chaining: Promises allow you to chain multiple asynchronous operations, which prevents the deeply nested callback structure.
