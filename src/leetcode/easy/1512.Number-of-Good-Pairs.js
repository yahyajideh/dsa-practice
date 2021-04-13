/**
 * 1512. Number of Good Pairs
 * @link https://leetcode.com/problems/number-of-good-pairs/
 * @param {number[]} nums
 * @return {number} of good good pairs
 */
const numIdenticalPairs = function (nums) {
  let goodPairs = new Map();
  let totalGoodPairs = 0;

  nums.forEach(num => {
    if (goodPairs.has(num)) {
      const newPairValue = goodPairs.get(num) + 1;
      goodPairs.set(num, newPairValue);
      totalGoodPairs += newPairValue;
    } else {
      goodPairs.set(num, 0);
    }
  });

  return totalGoodPairs;
};
