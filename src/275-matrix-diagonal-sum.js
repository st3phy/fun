/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = mat => {
    const n = mat.length - 1;
    let sum = 0;
    for (let j = 0; j <= n; j++) {
        sum += mat[j][j];
        if (j !== n - j) {
            sum += mat[n - j][j];
        }
    }

    return sum;
};

module.exports = { diagonalSum };

console.log(
    diagonalSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);
