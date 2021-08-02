// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []


/// -- -- - -- solution found on the internet

// const zoo = {
//     lion: '🦁',
//     panda: '🐼',
//   };
  
//   Object.keys(zoo);
//   // ['lion', 'panda']
  
//   Object.values(zoo);
//   // ['🦁', '🐼']
  
//   Object.entries(zoo);
//   // [ ['lion', '🦁'], ['panda', '🐼'] ]

const obj = {a: 1, b: 2 }
function objToArray(a) {
    return Object.entries(a); 
}

console.log(objToArray(obj));

