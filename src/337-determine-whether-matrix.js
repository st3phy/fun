/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @returns {boolean}
 */
const findRotation = (mat, target) => {
    const n = mat.length;

    // Rotate 4 times
    for (let rotate = 0; rotate < 4; rotate++) {
        // Check if current mat equals target
        const equal = mat.every((row, i) => row.every((val, j) => val === target[i][j]));
        if (equal === true) return true;

        // Rotate counterclockwise
        const temp = Array.from({ length: n }, () => Array(n));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                temp[i][j] = mat[n - 1 - j][i];
            }
        }
        mat = temp;
    }

    return false;
};

module.exports = { findRotation };

console.log(
    findRotation(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0]
        ]
    )
);
