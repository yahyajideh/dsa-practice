/**
 * 1773. Count Items Matching a Rule
 * @link https://leetcode.com/problems/count-items-matching-a-rule/submissions/
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function (items, ruleKey, ruleValue) {
  /*const ruleKeys = ['type', 'color', 'name'];
  const ruleKeyIndex = ruleKeys.indexOf(ruleKey);
  let matched = 0;

  items.forEach((item, i) =>
    item[ruleKeyIndex] == ruleValue ? matched++ : matched
  );

  return matched;*/

  const ruleKeysMap = {
    type: 0,
    color: 1,
    name: 2,
  };

  return items.reduce(
    (matched, item) =>
      item[ruleKeysMap[ruleKey]] == ruleValue ? matched + 1 : matched,
    0
  );
};
