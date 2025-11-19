var findMaxAverage = function(nums, k) {

    //[1,12,-5,-6,50,3], k = 4
    let sum = 0;
    for (let i = 0; i < k; i++) {//
        sum += nums[i];// sum = 2
    }

    let maxSum = sum;// 2

    // window slide karna start
    for (let i = k; i < nums.length; i++) { // new add, old remove
        sum = sum + nums[i] - nums[i - k];  // 2 + 50 - 1 = 51
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum / k;
};
