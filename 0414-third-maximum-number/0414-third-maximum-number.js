/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first = -Infinity, second = -Infinity, third = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        // Skip duplicates
        if (num === first || num === second || num === third) continue;

        if (num > first) {
            // Shift values down
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }

    // If third maximum doesn't exist, return first maximum
    return third === -Infinity ? first : third;
};