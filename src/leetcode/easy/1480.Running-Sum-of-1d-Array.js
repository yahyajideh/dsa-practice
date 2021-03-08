/**
 * 1480. Running Sum of 1d Array
 * @link https://leetcode.com/problems/running-sum-of-1d-array/
 * @param {number[]} nums
 * @return {number[]}
 *
 */
const runningSum = function (nums) {
  let count = 0;
  return nums.map(num => (count += num));
};
