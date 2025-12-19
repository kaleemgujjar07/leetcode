var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    // Count characters in both strings
    let freq1 = {};
    let freq2 = {};

    for (let ch of word1) {
        if (freq1[ch] === undefined) freq1[ch] = 1;
        else freq1[ch]++;
    }

    for (let ch of word2) {
        if (freq2[ch] === undefined) freq2[ch] = 1;
        else freq2[ch]++;
    }

    // 1. Check if both strings use the same set of characters
    for (let ch in freq1) {
        if (freq2[ch] === undefined) return false;
    }

    for (let ch in freq2) {
        if (freq1[ch] === undefined) return false;
    }

    // 2. Compare frequency MULTISETS
    let arr1 = [];
    let arr2 = [];

    for (let ch in freq1) arr1.push(freq1[ch]);
    for (let ch in freq2) arr2.push(freq2[ch]);

    // Sort the frequencies
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    // Compare
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
};
