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
