// https://leetcode.com/problems/add-two-numbers/

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

const addTwoNumbers = (arr1, arr2) => {
  arr1 = parseInt(arr1.reverse().join(""));
  arr2 = parseInt(arr2.reverse().join(""));

  let result = arr1 + arr2;
  return Array.from(String(result), Number).reverse();
  // array from takes an iterable argument as a first argument and makes them into a new array, the second parametre is optional and when it's given it is applied/mapped every single element of the arraay that created. In our case; first we converted our string result into an array, then we converted it into an array of number, and lastly we reversed the result as the challenged desired.
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
