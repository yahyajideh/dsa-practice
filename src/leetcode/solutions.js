import 'core-js/stable';

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
 * @link https://leetcode.com/problems/defanging-an-ip-address/
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]');
};

/**
 * 1431. Kids With the Greatest Number of Candies
 * @link https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  return candies.map(kidsCandies =>
    kidsCandies + extraCandies >= maxCandies ? true : false
  );
};

export { runningSum, defangIPaddr, kidsWithCandies };
