/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let arr = [];
        let curr = 0;

        for (let bit of nums) {
            curr = (curr * 2 + bit) % 5;
            arr.push(curr === 0);
        }

        return arr;
};