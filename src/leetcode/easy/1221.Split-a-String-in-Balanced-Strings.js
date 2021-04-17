/**
 * 1221. Split a String in Balanced Strings
 * @link https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function (s) {
  let count = 0;
  let maxAmountBalanced = 0;

  for (const c of s) {
    if (c == 'R') {
      count++;
    } else {
      count--;
    }

    if (count == 0) {
      maxAmountBalanced++;
    }
  }

  return maxAmountBalanced;
};
