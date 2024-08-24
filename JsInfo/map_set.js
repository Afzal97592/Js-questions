// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:

// - new Map() – creates the map.
// - map.set(key, value) – stores the value by the key.
// - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// - map.has(key) – returns true if the key exists, false otherwise.
// - map.delete(key) – removes the element (the key/value pair) by the key.
// - map.clear() – removes everything from the map.
// - map.size – returns the current element count.

const map = new Map();
map.set("name", "Afzal");
map.set("age", 23);
// const get = map.has("name1");
// const deleteVal = map.delete("name");
// console.log(map);
// console.log(get);
// console.log(deleteVal);

// let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key

// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// alert( map.get(1)   ); // 'num1'
// alert( map.get('1') ); // 'str1'

// alert( map.size ); // 3

// For looping over a map, there are 3 methods:

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

// let map2 = new Map([
//   ["1", "str1"],
//   [1, "num1"],
//   [true, "bool1"],
// ]);

// console.log(map2);

// -------------------Set--------------------
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

const set = new Set();
const user = { name: "Afzal" };
const res = set.add(user);

// [1,1,2,2,2,3,3,3,3, 4,4]

function getFrequency(arr) {
  let map = new Map();
  for (let key of arr) {
    let keyCheck = map.has(key);
    if (keyCheck) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  return map.values();
}
console.log("map___", getFrequency([1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 1, 2, 3]));
