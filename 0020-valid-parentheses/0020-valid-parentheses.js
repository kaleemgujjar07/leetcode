/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let closeToOpen = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    for (let i = 0; i < s.length; i++) {
        if (closeToOpen[s[i]]) {                          
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[s[i]]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0
};