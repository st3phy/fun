/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = grid => {
    let projection = 0;
    const len = grid.length;

    for (let i = 0; i < len; i++) {
        let maxRow = 0;
        let maxCol = 0;
        for (let j = 0; j < len; j++) {
            if (grid[i][j]) projection++; // The projection from the top is the number of non-zero elements
            maxRow = Math.max(grid[i][j], maxRow); // The projection from x is the sum of maximums of each row
            maxCol = Math.max(grid[j][i], maxCol); // The projection from y is the sum of maximums of each column
        }
        projection += maxRow + maxCol;
    }

    return projection;
};

module.exports = { projectionArea };
