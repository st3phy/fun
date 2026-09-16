/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @returns {number}
 */
const oddCells = (m, n, indices) => {
    const incrementedRow = new Array(m).fill(0);
    const incrementedCol = new Array(n).fill(0);

    for (let i = 0; i < indices.length; i++) {
        // Increment current row
        incrementedRow[indices[i][0]]++;
        // Increment current column
        incrementedCol[indices[i][1]]++;
    }

    // Count the number of odd rows and columns
    let oddRows = 0;
    let oddCols = 0;
    for (const n of incrementedRow) {
        if (n % 2 === 1) oddRows++;
    }
    for (const n of incrementedCol) {
        if (n % 2 === 1) oddCols++;
    }

    // odd rows * even columns + odd columns * even rows to get odd values (odd * even = odd)
    return oddRows * (n - oddCols) + oddCols * (m - oddRows);
};

module.exports = { oddCells };

console.log(
    oddCells(2, 2, [
        [1, 1],
        [0, 0]
    ])
);
