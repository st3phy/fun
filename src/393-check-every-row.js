/**
 * @param {number[][]} matrix
 * @returns {boolean}
 */
const checkValid = matrix => {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        const rows = new Set();
        const cols = new Set();
        for (let j = 0; j < n; j++) {
            if (rows.has(matrix[i][j]) || cols.has(matrix[j][i])) return false;

            rows.add(matrix[i][j]);
            cols.add(matrix[j][i]);
        }
        if (rows.size !== n || cols.size !== n) return false;
    }

    return true;
};

module.exports = { checkValid };

console.log(
    checkValid([
        [1, 2, 3],
        [3, 1, 2],
        [2, 3, 1]
    ])
);
