/**
 * 1108. Defanging an IP Address
 * @link https://leetcode.com/problems/defanging-an-ip-address/
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]');
};
