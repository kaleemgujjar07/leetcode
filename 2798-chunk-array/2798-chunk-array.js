/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    // let result = []
    // for(i=0; i<arr.length; i+=size) {
    //     result.push(arr.slice(i, i+size))
    // }
    // return result
    let result = [];
    let currentChunk = []; // Temporary array to hold chunks

    for (let i = 0; i < arr.length; i++) {
        currentChunk[currentChunk.length] = arr[i]; // Add elements to the current chunk

        // If the chunk is full or it's the last element, move it to the result array
    if (currentChunk.length === size || i === arr.length - 1) {
            result[result.length] = currentChunk; // Add the chunk to the result
            currentChunk = []; // Reset the chunk
        }
    }

    return result;
};
