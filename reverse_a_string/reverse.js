
document.body.style.backgroundColor = "#bbb"
// ----------- 1st method 

aString = prompt("Please make entry to see it reversed: ");

reversedString = aString.split("").reverse().join("");//join joins with comma 

console.log(reversedString); 

// ----------  2nd method

let text = "Clarusway"
let newText = '';
for(let i = text.length-1; i >= 0; i--) {
    newText += text[i]
}
console.log(`My new text is ${newText}`)