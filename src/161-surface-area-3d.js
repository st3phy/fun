/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = grid => {
    let size = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 0) {
                // every tower has an area of 4 x grid[i][j] + 2 (bottom and top) minus the adjacent towers
                size += grid[i][j] * 4 + 2;

                // we can just substract 2 * overlap with left tower and 2 * overlap with bottom tower instead of looking all around
                size -= Math.min(grid[i][j], grid[i][j + 1] ?? 0) * 2;
                size -= Math.min(grid[i][j], grid[i + 1]?.[j] ?? 0) * 2;
            }
        }
    }

    return size;
};

module.exports = { surfaceArea };

console.log(
    surfaceArea([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ])
);
