//---------- question

// Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1

function potatoes (a) {
    
    return a.match(/p/gi).length;
}

console.log(potatoes("potatoapplepotatopotato")); 


let str = 'Obama was US president';
let result  = str.search('was');
console.log(result);