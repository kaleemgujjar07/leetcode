/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.trim().split(" ")
    arr = arr.filter((word) => word !== "")
    let i = 0
    let endPoint = arr.length - 1;
    while (i < endPoint) {
        
            const temp = arr[i]
            arr[i] = arr[endPoint]
            arr[endPoint] = temp
        i++
        endPoint--
    }
    console.log(arr)
    return arr.join(" ")
};