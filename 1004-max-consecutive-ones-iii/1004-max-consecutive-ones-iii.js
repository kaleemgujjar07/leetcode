var longestOnes = function(nums, k) {

    let left = 0;        // window ka start
    let right = 0;       // window ka end
    let zeros = 0;       // window me kitne 0 hain
    let maxLength = 0;   // answer

    while (right < nums.length) {

        // Step 1: right wale element ko window me lo
        if (nums[right] == 0) {
            zeros++;
        }

        // Step 2: agar zeros > k ho gaye → window ko left se shrink karo
        while (zeros > k) {
            if (nums[left] == 0) {
                zeros--;
            }
            left++;   // window chhoti ho rahi hai
        }

        // Step 3: window ka size update karo
        let windowSize = right - left + 1;
        if (windowSize > maxLength) {
            maxLength = windowSize;
        }

        // Step 4: move right
        right++;
    }

    return maxLength;
};
