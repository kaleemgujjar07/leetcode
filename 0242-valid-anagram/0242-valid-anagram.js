var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const countS = {}, countT = {};
    
    for (let i = 0; i < s.length; i++) {
        countS[s[i]] = (countS[s[i]] || 0) + 1;
        countT[t[i]] = (countT[t[i]] || 0) + 1; // Fixed: use t[i]
    }
    
    for (const key in countT) {
        if (countS[key] !== countT[key]) return false;
    }
    return true;
};