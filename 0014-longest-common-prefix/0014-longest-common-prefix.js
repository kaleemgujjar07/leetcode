/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // ["inration", "iner", "inral", "inrate"]

    let str = "";
    if (strs.length === 1 || strs[0].length === 0) {
        return strs[0]
    }
    let small = Infinity
    let length = null;
    for (let k = 0; k < strs.length; k++) {
        if (strs[k].length < small) {
            small = strs[k].length
        }
    }
    length = small
    for (let i = 0; i < length; i++) {
        let flag = false;
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] === strs[j][i]) {
                flag = true;
            } else {
                flag = false
                break;
            }
        }
        if (flag) {
            str += strs[0][i]
        } else {
            break
        }
    }
    return str
};