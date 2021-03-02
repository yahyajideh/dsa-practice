/**
 * Problem 1480. Running Sum of 1d Array
 * @link https://leetcode.com/problems/running-sum-of-1d-array/
 * @param {number[]} nums
 * @return {number[]}
 *
 */
const runningSum = function (nums) {
  let count = 0;
  const runningSum = nums.map(el => (count += el));
  return runningSum;
};

/**
 * Problem 1108. Defanging an IP Address
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]');
};

export { runningSum, defangIPaddr };
