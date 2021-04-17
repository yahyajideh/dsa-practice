/**
 * 1486. XOR Operation in an Array
 * @link https://leetcode.com/problems/xor-operation-in-an-array/
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function (n, start) {
  const nums = [];
  let xor = 0;
  for (let i = 0; i < n; i++) {
    const current = start + 2 * i;
    nums[i] = current;
    xor ^= current;
  }
  return xor;
};
