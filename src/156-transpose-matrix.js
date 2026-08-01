/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = matrix => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const res = Array.from({ length: cols }, () => Array(rows));

    // Convert matrix to linear representation
    for (let i = 0; i < rows * cols; i++) {
        // Calculate the row and col value for each element
        const row = Math.floor(i / cols);
        const col = i % cols;

        // Flipping the array just means the old row becomes the new col and vice-versa
        res[col][row] = matrix[row][col];
    }

    return res;
};

module.exports = { transpose };

console.log(
    transpose([
        [1, 2, 3],
        [4, 5, 6]
    ])
);
