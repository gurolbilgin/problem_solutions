//////// -- -- - - --    method 1 


// let numLi= [1,5,5,6,8,9];
// let min = numLi[0];
// let max = numLi[0];


// function minMax (number) {
//     for(let i = 0;i < number.length; i++){
//         for (let j = 0; j < number.length; j++){
//         if(number[i] > max) max = number[i]; 
//             if (number[j] < min) 
//             min = number[j]
//         }   
//     }
//         let result = Array(min, max)
//         return result
// }

// console.log(minMax(numLi));


// // //////// - - -- -  method 2

// let numLi= [1,5,5,6,8,9];
// let result = [];

function minMax () {
    numLi = numLi.sort((a,b) => (a - b));
    console.log(numLi);
    result = Array(numLi[0], numLi[numLi.length-1]);
    return result;
}

console.log(minMax());



// ////////  ------ - -  method 3

let numLi= [1,5,5,6,8,9];
let min;
let max;

function minMax () {
    max = Math.max(...numLi)
    min = Math.min(...numLi)
    
    return Array(min,max)
}
console.log(minMax());



