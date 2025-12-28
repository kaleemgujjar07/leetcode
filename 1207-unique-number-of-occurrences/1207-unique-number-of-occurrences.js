var uniqueOccurrences = function(arr) {
    // Step 1: Count frequencies manually
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (freq[num] === undefined) {
            freq[num] = 1;
        } else {
            freq[num]++;
        }
    }

    // Step 2: Check if frequency values are unique
    let seen = {};

    for (let key in freq) {
        let count = freq[key];

        if (seen[count] === undefined) {
            seen[count] = true;
        } else {
            // Duplicate frequency found
            return false;
        }
    }

    return true;
};
