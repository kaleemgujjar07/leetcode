function longestSubarray(nums) {
  let left = 0;        // window ka start
  let zeroCount = 0;   // window me kitne 0 hain
  let maxLen = 0;      // longest after deleting one element

  for (let right = 0; right < nums.length; right++) {

    // STEP 1: right ko window me include karo
    if (nums[right] === 0) {
      zeroCount = zeroCount + 1;
    }

    // STEP 2: agar window me 1 se zyada zero ho gaye to left ko badhayo
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount = zeroCount - 1;
      }
      left = left + 1;
    }

    // STEP 3: 1 element delete karna zaroori hai → right - left
    let curLen = right - left;

    if (curLen > maxLen) {
      maxLen = curLen;
    }
  }

  return maxLen;
}
