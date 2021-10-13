// Dance for Cash
// Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. The machines now interpret a series of consecutive dance moves in place of a PIN number.

// Create a program that converts a customer's PIN number to its dance equivalent. There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

// Examples
// danceConvert("0000") ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]

// danceConvert("3856") ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]

// danceConvert("9999") ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

// danceConvert("32a1") ➞ "Invalid input."
// Notes
// Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value. If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
// Valid input will always be a string of four digits. Output will be a string array.
// If the input is not four valid numbers, return the string, "Invalid input."

const MOVES = [
  "Shimmy",
  "Shake",
  "Pirouette",
  "Slide",
  "Box Step",
  "Headspin",
  "Dosado",
  "Pop",
  "Lock",
  "Arabesque",
];

function danceConvert(pin) {
  const danceOutput = [];
  let val = [];
  for (let i in pin) {
    console.log();
    if (!Number.isInteger(parseInt(pin[i]))) return "Invalid Input!";
    val.push(Number(pin[i]) + Number(i));
  }

  val = val.map((e) => {
    if (e > MOVES.length - 1) return e - MOVES.length;
    else return e;
  });

  val.map((e) => danceOutput.push(MOVES[e]));

  console.log(val);
  return danceOutput;
}
console.log(danceConvert("0000")); //  ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]

console.log(danceConvert("3856")); //  ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]

console.log(danceConvert("9999")); //  ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

console.log(danceConvert("32a1")); //  ➞ "Invalid input."
