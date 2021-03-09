/**
 * 1470. Shuffle the Array
 * @link https://leetcode.com/problems/shuffle-the-array/
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
  const shuffled = [];
  for (let i = 0; i < n; i++) {
    shuffled.push(nums[i]);
    shuffled.push(nums[i + n]);
  }
  return shuffled;
};
