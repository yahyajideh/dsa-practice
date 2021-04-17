/**
 * 1389. Create Target Array in the Given Order
 * @link https://leetcode.com/problems/create-target-array-in-the-given-order/git
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const target = [];

  nums.forEach((element, i) => {
    target.splice(index[i], 0, element);
  });

  return target;
};
