/**
 * @param {number[][]} grid
 * @returns {boolean}
 */
const checkXMatrix = grid => {
    const n = grid.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j === i || j === n - 1 - i) {
                if (grid[i][j] === 0) return false;
            } else if (grid[i][j] !== 0) {
                return false;
            }
        }
    }

    return true;
};

module.exports = { checkXMatrix };

console.log(
    checkXMatrix([
        [2, 0, 0, 1],
        [0, 3, 1, 0],
        [0, 5, 2, 0],
        [4, 0, 0, 2]
    ])
);
