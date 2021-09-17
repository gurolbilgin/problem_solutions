// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = (s) => {
  let arr = [...s];
  let stock = [];
  let subArr = [];
  let result = [...blankCount+1*',']
  arr.map((e) => {
    stock.indexOf(e) === -1 ? stock.push(e) : stock.push("") && stock.push(e);
    console.log(stock);
  });

  // console.log(stock);
  // console.log(stock.indexOf(""));
  let blankCount = 0;
  stock.map((e) => (e !== "" ? null : blankCount++));
  [...blankCount+1*','] = subArr
  console.log("subArr", subArr);
  console.log(blankCount);

  //   console.log(stock.length);
  //   console.log(stock.filter((e) => e == "").length);
  //   console.log(stock.filter((e) => e == ""));
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
