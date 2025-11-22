/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = []
    let sum = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        } else if (operations[i] === "D") {
            arr.push(arr[arr.length - 1] * 2)
        } else if (operations[i] === "C") {
            arr.pop()
        } else {
            arr.push(Number(operations[i]))
        }
    }
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j]
    }
    console.log(arr)
    return sum
};