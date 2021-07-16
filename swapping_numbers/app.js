// ----- question

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:

// largestSwap(27) ➞ false

// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

// Examples
// largestSwap(14) ➞ false

// largestSwap(53) ➞ true

// largestSwap(99) ➞ true
// Notes
// Numbers with two identical digits (third example) should yield true (you can't do better).

function largestSwap(num) {
    num = num.toString();
    if (num[0] < num[1]) {
        return false;
    } else if (num[0] > num[1]) {
        return true;
    } else if (num.length != 2){
        return false;
       
    } else {
        return true;
    }
	
}

console.log(largestSwap(14));
console.log(largestSwap(53));
console.log(largestSwap(9));
console.log(largestSwap(99));




