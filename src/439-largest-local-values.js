/**
 * @param {number[][]} grid
 * @returns {number[][]}
 */
const largestLocal = grid => {
    const n = grid.length;
    const res = Array.from({ length: n - 2 }, () => []);

    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            let max = grid[i][j];
            for (let m = 0; m < 3; m++) {
                for (let k = 0; k < 3; k++) {
                    max = Math.max(max, grid[i + m][j + k]);
                }
            }
            res[i][j] = max;
        }
    }

    return res;
};

module.exports = { largestLocal };

console.log(
    largestLocal([
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2]
    ])
);
