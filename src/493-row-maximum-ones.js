/**
 * @param {number[][]} mat
 * @returns {number[]}
 */
const rowAndMaximumOnes = mat => {
    let max = 0;
    let row = 0;

    for (let i = 0; i < mat.length; i++) {
        let sum = 0;
        for (const val of mat[i]) {
            sum += val;
        }
        if (sum === mat[i].length) return [i, sum];

        if (sum > max) {
            max = sum;
            row = i;
        }
    }

    return [row, max];
};

module.exports = { rowAndMaximumOnes };

console.log(
    rowAndMaximumOnes([
        [0, 0, 0],
        [0, 1, 1]
    ])
);
