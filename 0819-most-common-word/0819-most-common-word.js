/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned);
    const wordsArr = paragraph
        .toLowerCase()
        .replace(/[^a-z]/g, " ")
        .split(/\s+/);

    const freq = {};
    let max = 0;
    let maxWord = "";

    for (const word of wordsArr) {
        if (word === "" || bannedSet.has(word)) continue;

        freq[word] = (freq[word] || 0) + 1;

        if (freq[word] > max) {
            max = freq[word];
            maxWord = word;
        }
    }

    return maxWord;
};