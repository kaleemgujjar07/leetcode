var strStr = function (haystack, needle) {
    if (needle === "") return 0; // empty needle case

    for (let i = 0; i < haystack.length; i++) {
        let j = 0;

        // try to match needle starting at position i
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }

        // if we matched the whole needle
        if (j === needle.length) {
            return i;
        }
    }

    return -1; // not found
};