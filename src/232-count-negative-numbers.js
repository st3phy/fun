/**
 * @param {number[][]} grid
 * @returns {number}
 */
const countNegatives = grid => {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    let row = rows - 1;
    let col = 0;

    while (row >= 0 && col < cols) {
        // If current [row][col] < 0, everything to its right is also < 0
        if (grid[row][col] < 0) {
            count += cols - col;
            row--;
        }
        // Otherwise, everything to its left and up is also positive
        else {
            col++;
        }
    }

    return count;
};

module.exports = { countNegatives };

console.log(
    countNegatives([
        [4, 3, 2, 1],
        [3, 2, 1, 1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3]
    ])
);
