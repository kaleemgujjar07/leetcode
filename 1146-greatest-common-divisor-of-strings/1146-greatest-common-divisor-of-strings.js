/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

    var gcdOfStrings = function(str1, str2) {
    // Step 1: get lengths
    let len1 = str1.length;
    let len2 = str2.length;

    // Step 2: find smaller length
    let smaller = len1;
    if (len2 < len1) {
        smaller = len2;
    }

    let answer = "";

    // Step 3: try every possible pattern length
    for (let k = 1; k <= smaller; k++) {

        // take first k characters manually as pattern
        let pattern = "";
        for (let i = 0; i < k; i++) {
            pattern = pattern + str1[i];
        }

        // check if pattern divides str1
        let divides1 = true;
        let i = 0;
        while (i < len1) {
            for (let j = 0; j < k; j++) {
                if (pattern[j] !== str1[i]) {
                    divides1 = false;
                    break;
                }
                i = i + 1;
            }
            if (!divides1) break;
        }

        // check if pattern divides str2
        let divides2 = true;
        let m = 0;
        while (m < len2) {
            for (let n = 0; n < k; n++) {
                if (pattern[n] !== str2[m]) {
                    divides2 = false;
                    break;
                }
                m = m + 1;
            }
            if (!divides2) break;
        }

        // if pattern divides both
        if (divides1 && divides2) {
            answer = pattern;
        }
    }

    return answer;

};