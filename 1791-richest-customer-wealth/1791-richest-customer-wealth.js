/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let MaxSum = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        let arr = accounts[i];
        for (let j = 0; j < arr.length; j++) {
            sum = sum + accounts[i][j]
        }
        if (sum > MaxSum) {
            MaxSum = sum;
        }
    }
    return MaxSum;

};