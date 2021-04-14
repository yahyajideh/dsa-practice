/**
 * 1678. Goal Parser Interpretation
 * @link https://leetcode.com/problems/goal-parser-interpretation/
 * @param {string} command
 * @return {string}
 */
const interpret = function (command) {
  // return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
  return command.split('()').join('o').split('(al)').join('al');
};
