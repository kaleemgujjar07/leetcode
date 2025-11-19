var findMaxAverage = function(nums, k) {

    // pehli window ka sum
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;

    // window slide karna start
    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];  // new add, old remove
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum / k;
};
