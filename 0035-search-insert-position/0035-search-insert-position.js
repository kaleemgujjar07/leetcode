/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (target < nums[j]) {
            return j;
        }
    }
    return nums.length
};