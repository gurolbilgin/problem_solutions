// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

const array = [];


function arrayOfMultiples(a,b) {
    while (b > 0) {
        array.push(a * (array.length+1))
        b--;
    }
    return array
}

console.log(arrayOfMultiples(7,5));