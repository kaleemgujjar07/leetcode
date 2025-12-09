var uniqueOccurrences = function(arr) {
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (freq[num] === undefined) {
            freq[num] = 1;
        } else {
            freq[num]++;
        }
    }

    let seen = {};

    for (let key in freq) {
        let count = freq[key];

        if (seen[count] === undefined) {
            seen[count] = true;
        } else {
            return false;
        }
    }

    return true;
};
