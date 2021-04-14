/**
 * 1313. Decompress Run-Length Encoded List
 * @link https://leetcode.com/problems/decompress-run-length-encoded-list/
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function (nums) {
  return nums.reduce(
    (acc, cur, i, self) =>
      i % 2 == 0 ? [...acc, ...Array(cur).fill(self[i + 1])] : acc,
    []
  );
};
