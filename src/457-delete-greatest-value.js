/**
 * @param {number[][]} grid
 * @returns {number}
 */
const deleteGreatesValue = grid => {
    for (const row of grid) {
        row.sort((a, b) => a - b);
    }

    let sum = 0;

    for (let i = 0; i < grid[0].length; i++) {
        let max = 0;
        for (let j = 0; j < grid.length; j++) {
            max = Math.max(max, grid[j][i]);
        }
        sum += max;
    }

    return sum;
};

module.exports = { deleteGreatesValue };

console.log(deleteGreatesValue([[10]]));
