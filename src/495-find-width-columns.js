/**
 * @param {number[][]} grid
 * @returns {number[]}
 */
const findColumnWidth = grid => {
    const ans = new Array(grid[0].length).fill(0);

    for (const row of grid) {
        for (let i = 0; i < row.length; i++) {
            ans[i] = Math.max(ans[i], String(row[i]).length);
        }
    }

    return ans;
};

module.exports = { findColumnWidth };

console.log(
    findColumnWidth([
        [-15, 1, 3],
        [15, 7, 12],
        [5, 6, -2]
    ])
);
