/**
 * 1672. Richest Customer Wealth
 * @link https://leetcode.com/problems/richest-customer-wealth/
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  let richest = -1;
  accounts.forEach(account => {
    const wealth = account.reduce((total, money) => total + money, 0);
    richest = wealth > richest ? wealth : richest;
  });
  return richest;
};
