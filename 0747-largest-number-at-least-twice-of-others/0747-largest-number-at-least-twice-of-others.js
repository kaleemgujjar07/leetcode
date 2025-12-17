
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let index = 0;
    let maxNumber = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNumber) {
            maxNumber = nums[i]
            index = i;
        }
    }
    for(let j = 0; j < nums.length; j++) {
        if (j === index) {
            continue
        }
        if (nums[j] * 2 > maxNumber) {
            index = -1;
        }
    }
    console.log(maxNumber)
    return index
};
