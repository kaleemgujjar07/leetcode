
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums) // {100, 4, 200 1, 3 ,2}
    let maxLength = 0;
    for (const num of numsSet) {
        if (!numsSet.has(num - 1)) {
            let length = 1;     
            while (numsSet.has(num + length)) {
                length++
            }
        if (length > maxLength) {
            maxLength = length
        }
        }
    }
    return maxLength
};
