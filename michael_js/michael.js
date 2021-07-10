
// Write a function that returns the string "something" joined with a space " " and the given argument a


// ----------- solution 1 
// function addToStart (a) {
//     return "something" + " " + a
// }

// console.log(addToStart("bob Jane"));


// ----------- solution 2
// let x = 'something';
// let y = " ";

// function addToStart (a) {
//     return x.concat(y,a)
// }

// console.log(addToStart("bob Jane"));

//----------- solution 3

// let x = 'something';
// function addToStart (a) {
//     return x.concat(" ", a)
// }
// console.log(addToStart("bob Jane"));

// ------------------------------------------------------------------------
//******* Question *********   ????????????? michael's questions
// here is a simple challenge:
// write a function
// input: string => "21/06/2019"
// output: string => "2019-06-21"

// lets make it more generic and complex.
// input: string => "21/06/2019" or "21.06.2019" or "21 06 2019" etc.
// output: string => "2019-06-21"

// let correctEntry = true;

// while (correctEntry) {
//     var input = window.prompt("Enter your date using DD/MM/YYYY, DD.MM.YYYY or DD MM YYYY format to organize: ")

//     if (input.length == 10){
//     correctEntry = false;
//     }     
// }

// let output  = function (inpt) {
//     let char = /[ ./]/g;
//     console.log(inpt);
//     inpt = inpt.replace(char, " ").split(' ');
//     console.log(inpt);
//     inpt = [inpt[2], inpt[1], inpt[0]].join('-');
//     return inpt;
// }

// console.log(output(input));

// ------------------------------------------
//------ Question Michael2 

// hi there.  hope you are doing fine. here is a simple challenge (real time problem):
// get an input from user (use prompt) until you get a valid number between 0 and 100.

// let entry = true;

// while (entry) {
//     let number = prompt("Please enter a number between 0 and 100: ");
//     if (Number(number) && 0 < number && number <= 100 ) 
//     entry = false;
    
    
// }

// console.log("You have entered a number within the range");

// // ----------- Sofia's version
// while (true){
//     let input = prompt("Please enter a number between 0 and 100")
//     if(Number(input) && num > 0 && num <= 100){
//         console.log('It is a valid number');
//         break;
//     }else{
//         console.log('Please enter valid number');
//     }
// }


// there are two other methods to convert strings to numbers:
// parseInt(string, 10) ==> second parametre is radix which is base 10 in our condition
// parseFloat("3.14randomstuff") returns 3.14 


//***********next step (we will do this together sooner): use text input in html and warn user if the number is not valid, by changing its border color to red. until you get a valid number.

// ---------------------

// //-------------------- Michael Question 3 
// Create an application which selects a name randomly from a list. Then we can use it whenever we need

const starWarsCharachterList = ["Darth", "Kenobi", "Sith", "Mandalorian", "C-3PO", "Anakin", "Han", "Yoda"];

let lengthList = starWarsCharachterList.length;

let dice = Math.floor(Math.random() * lengthList);
let randomName = starWarsCharachterList[dice];

console.log(randomName);
