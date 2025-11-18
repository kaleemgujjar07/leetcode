var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);  // sorting
    let left = 0;
    let right = nums.length - 1;
    let operations = 0;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === k) {
            operations++;
            left++;
            right--;
        } 
        else if (sum < k) {
            left++; // small sum, big number chahiye
        } 
        else {
            right--; // sum zyada, small number chahiye
        }
    }

    return operations;
};
