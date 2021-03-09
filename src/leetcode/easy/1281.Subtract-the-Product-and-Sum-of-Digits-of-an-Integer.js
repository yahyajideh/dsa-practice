/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * @link https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function (n) {
  const arr = ('' + n)
    .split('')
    .reduce((acc, curr) => [acc[0] * curr, acc[1] + +curr], [1, 0]);
  return arr[0] - arr[1];
};

console.log(subtractProductAndSum(234));
