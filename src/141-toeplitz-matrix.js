/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = matrix => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Check that each value is equal to it top-left neighbor - the first row and column do not have top-left neighbors
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }

    return true;
};

module.exports = { isToeplitzMatrix };

console.log(
    isToeplitzMatrix([
        [1, 2],
        [1, 2]
    ])
);
