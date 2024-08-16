// Objects in JavaScript are like containers that hold collections of related data. Imagine a box where you can store different items, and each item has a label (or key) so you can easily find it later.

// We can add, remove and read files from it at any time.

// Property values are accessible using the dot notation:

let user = {
  name: "Afzal",
  age: 23,
};

// console.log(user.name); // Afzal
// console.log(user.age); // 23

// To remove a property, we can use the delete operator:

// delete user.age;
// console.log(user); //{name:Afzal}

// We can also use multiword property names, but then they must be quoted

let user2 = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

// for (let item in user2) {
//   console.log(user2[item]);
// }

// For multiword properties, the dot access doesn’t work:

// "key" in object  return truthy or falsy value according to object value is or not in object
// console.log("age" in user2);

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let user3 = {};

function isEmpty(obj) {
  for (let key in obj) if (key) return false;
  return true;
}
// user3["name"] = "Afzal";
const isEmptyObj = isEmpty(user3);
// console.log(isEmptyObj);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  let value = salaries[key];
  sum += value;
}
// console.log("sum", sum);

// Multiply numeric property values by 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiple(obj) {
  let res = 1;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      res *= obj[key];
      // multipley to key if numeric
      //   obj[key] *= 3;
    }
  }
  return res;
}

// console.log("multiple", multiple(menu));

let user4 = { name: "John", age: 23, isAdmin: true };

let admin = user4;
// console.log(admin === user4);

const cloneObj = {};

for (let key in user4) {
  cloneObj[key] = user4[key];
}
cloneObj.name = "afzal";
// console.log(cloneObj, user4); // will give the different answer because cloneObj is referring to different memory location

// so i will make any change in cloneObj then it will change only to this obj
// Object.assign(dest, ...sources);
// The first argument dest is a target object.
// Further arguments is a list of source objects.

const source1 = { isChecked: true };
const source2 = { add: "Delhi" };
Object.assign(user4, source1, source2);

// console.log(user4);
const cloneWithAssign = Object.assign({}, user4);
cloneWithAssign.name = "Ahmad";
// console.log(cloneWithAssign, user4); // this will also give the different answer because we are cloning with assign so it also create the new reference so if i will change anything in cloned object then it will not reflect in original one because of different referenced

// The call structuredClone(object) clones the object with all nested properties.

// Here’s how we can use it in our example:

let user5 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(user5);

console.log(user5.sizes === clone.sizes); // false, different objects

// user and clone are totally unrelated now
user5.sizes.width = 60; // change a property from one place
console.log(clone.sizes.width);
