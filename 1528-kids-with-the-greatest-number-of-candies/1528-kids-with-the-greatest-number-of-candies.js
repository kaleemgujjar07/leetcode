/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
let maxCandies = candies[0];
for (let i = 1; i < candies.length; i++) {
  if (candies[i] > maxCandies) {
    maxCandies = candies[i];
  }
}

let result = [];
for (let i = 0; i < candies.length; i++) {
  if (candies[i] + extraCandies >= maxCandies) {
    result.push(true);
  } else {
    result.push(false);
  }
}
return result;
};