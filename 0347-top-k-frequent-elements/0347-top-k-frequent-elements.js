
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let count = {};
    let output = []
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }
    for (let j = 0; j < k; j++) {
        let maxCount = 0;
        let maxKey = 1;

        for (const key in  count) {
            if (count[key] > maxCount) {
                maxCount = count[key]
                maxKey = key
            }
        }
        output.push(Number(maxKey))
        delete count[maxKey]
    }


    console.log(count)
    return output
};
