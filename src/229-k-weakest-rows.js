/**
 * @param {number[][]} mat
 * @param {number} k
 * @returns {number[]}
 */
const kWeakestRows = (mat, k) => {
    const rows = mat.length;
    const cols = mat[0].length;

    // Count "soldiers" for each row
    const soldiers = [];
    for (let i = 0; i < rows; i++) {
        let count = 0;
        for (let j = 0; j < cols; j++) {
            count += mat[i][j];
        }
        soldiers[i] = [count, i];
    }

    // Sort "soldiers" by value, ascending (indices are already sorted in ascending order)
    soldiers.sort((a, b) => a[0] - b[0]);

    // Return indices for first k "soldiers"
    return soldiers.slice(0, k).map(a => a[1]);
};

module.exports = { kWeakestRows };

console.log(
    kWeakestRows(
        [
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1]
        ],
        3
    )
);
