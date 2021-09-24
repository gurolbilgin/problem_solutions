// Extracting Words with "-ing" Inflection
// Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". Your function should also exclude all the mono-syllabic words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing", the "-ing" is not an inflection affix.

// Examples
// ingExtractor("coming bringing Letting sing") ➞ ["coming", "bringing", "Letting"]

// ingExtractor("going Ping, king sHrink dOing") ➞ ["going",, "dOing"]

// ingExtractor("zing went ring, ding wing SINk") ➞ []
// Notes
// Mono-syllabic means a word containing just one syllable.
// It's probably best to use RegEx for this challenge.

function ingExtractor(s) {
  s = s.split(" ");
  console.log(s);
  let regFilterING = /ing\b/gi;
  let regFilterVowels = new RegExp(/\w*[aeiou]\w*[aeiou]\w*/gi);
  let result = [];

  s.map((e) => {
    console.log("e1", e);
    if (regFilterING.test(e)) {
      // return (result = [...result, e]);
      console.log("e2", e);
      // result.push(e);

      // return result;
    }
  });
  // console.log(result);
}

console.log(ingExtractor("coming bringing Letting sing")); // ["coming", "bringing", "Letting"]
console.log(ingExtractor("going Ping, king sHrink dOing")); //["going",, "dOing"]
console.log(ingExtractor("zing went ring, ding wing SINk")); //[]
