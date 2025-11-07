/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let write = 0;

    //[0,1,0,3,12]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {// 1
            nums[write] = nums[i];
            write++;
        }
    }

    //[1,3,12,3,12]
    while (write < nums.length) {
        nums[write] = 0;
        write++;
    }
};
