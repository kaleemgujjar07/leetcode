var filter = function(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        // fn(arr[i], i) check karega true/false
        if (fn(arr[i], i)) {
            result.push(arr[i]); // agar true hai to rakho
        }
    }

    return result;
};
