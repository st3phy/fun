/**
 * @param {number[][]} grid
 * @param {number} k
 * @returns {number[][]}
 */
const shiftGrid = (grid, k) => {
    const n = grid.length;
    const m = grid[0].length;
    const size = n * m;

    // If k is bigger than n*m we start over
    k %= size;

    if (k === 0) return grid;

    const res = Array.from({ length: n }, () => Array(m).fill(0));

    // Flatten array to a vector
    for (let i = 0; i < size; i++) {
        const oldRow = Math.floor(i / m);
        const oldCol = i % m;

        const newIndex = (i + k) % size;

        const newRow = Math.floor(newIndex / m);
        const newCol = newIndex % m;

        res[newRow][newCol] = grid[oldRow][oldCol];
    }

    return res;
};

module.exports = { shiftGrid };

console.log(
    shiftGrid(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        10
    )
);
