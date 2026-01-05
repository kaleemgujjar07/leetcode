var equalPairs = function (grid) {
    const n = grid.length;
    const rowMap = new Map();

    // Store each row as a string
    for (let i = 0; i < n; i++) {
        const key = grid[i].join(",");
        rowMap.set(key, (rowMap.get(key) || 0) + 1);
    }

    let count = 0;

    // Build each column and compare
    for (let col = 0; col < n; col++) {
        let column = [];
        for (let row = 0; row < n; row++) {
            column.push(grid[row][col]);
        }

        const key = column.join(",");
        if (rowMap.has(key)) {
            count += rowMap.get(key);
        }
    }

    return count;
};
