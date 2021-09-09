//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  let arr = word.toLowerCase().split("");
  let copyArr = [];

  for (let i in arr) {
    copyArr.indexOf(arr[i]) === -1 ? copyArr.push("(") : copyArr.push(")");
  }
  return copyArr;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));

// "(((";
// "()()()";
// ")())())";
// "))((";

// function duplicateLetter(o) {
//   var arr = o.toUpperCase().split("");
//   var obj = {};

//   for (var v in arr) {
//     obj[arr[v]] = obj[arr[v]] || 0;
//     obj[arr[v]]++;
//   }

//   for (var v in obj) {
//     console.log(o + ", the letter '" + v + "' => " + obj[v] + " times.");
//   }
// }

// duplicateLetter("Captain America");
