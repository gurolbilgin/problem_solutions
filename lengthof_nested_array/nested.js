//     Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.

// Examples
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// getLength([1, [2], 1, [2], 1]) ➞ 5
// Notes
// An empty array should return 0.
// const getArrLength = (arr) => {
//   let array = arr;

//   function deconstruct(array) {
//     let a, b;
//     array.map((e) => {
//       e[0] ? ([a, b] = e) : null;
//       a ? array.push(a) : null;
//       b ? array.push(b) : null;
//       return array;
//     });
//   }
//   deconstruct(array);
// // };

// console.log(getArrLength([1, [2, 3]]));
// console.log(getArrLength([1, [2, [3, 4]]]));
// console.log(getArrLength([1, [2, [3, [4, [5, 6]]]]]));
// console.log(getArrLength([1, [2], 1, [2], 1]));

let arr = [1, [2, [3, [4, [5, 6]]]]];
let exp = [];

if (arr.shift()) {
  if (!Array.isArray(arr[0])) {
    exp.push([arr[0]]);
    arr.shift();
  } else arr = [...arr];
}
// exp.push(a);
// console.log(!Array.isArray(arr[0]));
console.log(arr);
console.log(exp);
