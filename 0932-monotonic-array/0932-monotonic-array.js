/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
        let increasing = false;
        let decreasing = false;
        const len = nums.length;
        
        for (let i = 1; i < len; i++) {
            if (nums[i] > nums[i - 1]) {
                increasing = true;
                if (increasing === decreasing) {
                    return false;
                }
            } else if (nums[i] < nums[i - 1]) {
                decreasing = true;
                if (increasing === decreasing) {
                    return false;
                }
            }
        }
        return true;
    }
