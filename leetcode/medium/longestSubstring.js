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
  let count = 0;

  let begining = 0;
  let ending = 0;
  let set = new Set();

  while (begining < s.length && ending < s.length) {
    let char = s.charAt(ending);
    // console.log("char", char);
    if (!set.has(char)) {
      set.add(char);
      ending++;
      count = Math.max(count, ending - begining);
      // console.log("set", set);
      // console.log("count", count);
    } else {
      set.delete(s.charAt(begining));
      begining++;
    }
  }
  return count;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
