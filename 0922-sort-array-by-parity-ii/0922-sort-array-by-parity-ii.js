/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let arr = new Array(nums.length)
    let evenIndex = 0;
    let oddIndex = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] %2 === 0) {
            arr[evenIndex] = nums[i]
            evenIndex += 2
        } else {
            arr[oddIndex] = nums[i]
            oddIndex += 2
        }
    }
    // console.log(arr)
    return arr
};