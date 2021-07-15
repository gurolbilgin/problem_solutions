
const age = prompt("please enter your age: ");

function ageCalculator () {
    return Math.ceil(age * 365.25);
}

console.log(ageCalculator(age))

//Sofia's solution

const age = parseInt(prompt("Please enter your age.."));
const days = 365;
function ageToDays(age) {
let result = age * days;
console.log(result);

}
ageToDays(10)