var maxVowels = function(s, k) {

    let count = 0;       // current window me vowels kitne hain
    let maxCount = 0;    // ab tak sabse zyada vowels

    // Step 1: First window ke vowels count karo
    for (let i = 0; i < k; i++) {
        let ch = s[i];
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count++;
        }
    }

    maxCount = count; // first window ka result

    // Step 2: Window ko agay slide karo
    for (let i = k; i < s.length; i++) {

        // 1) Naya character add hoga
        let addChar = s[i];
        if (addChar == 'a' || addChar == 'e' || addChar == 'i' || addChar        ==         'o' || addChar == 'u') {
            count++;
        }

        // 2) Purana character remove hoga
        let removeChar = s[i - k];
        if (removeChar == 'a' || removeChar == 'e' || removeChar == 'i' || removeChar == 'o' || removeChar == 'u') {
            count--;
        }

        // 3) Check if new window is best
        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
};
