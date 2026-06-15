/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matricReshape = (mat, r, c) => {
    // const rows = mat.length;
    // const columns = mat[0].length;
    // // Reahspe operation is not possible
    // if (r * c !== rows * columns) return mat;

    // const res = [];
    // let currentRow = [];

    // for (let i = 0; i < rows; i++) {
    //     for (let j = 0; j < columns; j++) {
    //         // If we reached the desired row length
    //         if (currentRow.length === c) {
    //             // Push current computed row to results array
    //             res.push(currentRow);
    //             // Set next row to empty array
    //             currentRow = [];
    //         }
    //         // Push current value to current row
    //         currentRow.push(mat[i][j]);
    //     }
    // }

    // // Push last computed row to results array
    // res.push(currentRow);

    // return res;

    // Use "index mapping" - think of the matrix as a single linear array
    const rows = mat.length;
    const cols = mat[0].length;

    // Reshape operation is not possible
    if (r * c !== rows * cols) return mat;

    // Create desired matrix shell
    const res = Array.from({ length: r }, () => Array(c));

    // Directly map each element's linear index from the old matrix to the new one
    for (let i = 0; i < rows * cols; i++) {
        res[Math.floor(i / c)][i % c] = mat[Math.floor(i / cols)][i % cols];
    }

    return res;
};

module.exports = { matricReshape };

console.log(
    matricReshape(
        [
            [1, 2],
            [3, 4],
            [5, 6]
        ],
        2,
        3
    )
);
