/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let group = {}
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let chars = word.split("");
        for (let j = 0; j < chars.length; j++) {
            for (let k = j + 1; k < chars.length; k++) {
                if (chars[j] > chars[k]) {
                    let temp = chars[j]
                    chars[j] = chars[k]
                    chars[k] = temp
                }
            }
        }
        let key = ""
        for (let l = 0; l < chars.length; l++) {
            key += chars[l]
        }

        if (!group[key]) {
            group[key] = []
        }
        group[key].push(word)
    }
    let result = []
    for (const key in group) {
        result.push(group[key])
    }
    return result
};