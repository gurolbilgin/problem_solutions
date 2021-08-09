// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// Create a function which returns the number of true values there are in an array.

const booleanList = [];

const array = [true, false, false, true, false]

// countTrue([false, false, false, false]) ➞ 0

array.forEach(element => { 
    if (element == true) {
    return booleanList.push(element)
}});

console.log(booleanList);


//  - - - - - - - - method_2 using filter method 

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const result = array.filter(word => word === true);

console.log(result.length);


// - - - - - - method 3 using a for loop

function countTrue(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            result.push(arr[i]);
        }
    }
    return result.length;
   }




