/**
 * @param {number[][]} matrix
 * @returns {number{}}
 */
const luckyNumbers = matrix => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Compute mins
    const mins = new Set();
    for (let i = 0; i < rows; i++) {
        let min = 1e5 + 1;
        for (let j = 0; j < cols; j++) {
            min = Math.min(min, matrix[i][j]);
        }
        mins.add(min);
    }

    // Look for maximums among columns
    for (let i = 0; i < cols; i++) {
        let max = 0;
        for (let j = 0; j < rows; j++) {
            max = Math.max(max, matrix[j][i]);
        }
        // If the current max is also a min, it is the lucky number
        if (mins.has(max)) {
            return [max];
        }
    }

    return [];
};

module.exports = { luckyNumbers };

console.log(
    luckyNumbers([
        [1, 10, 4, 2],
        [9, 3, 8, 7],
        [15, 16, 17, 12]
    ])
);
