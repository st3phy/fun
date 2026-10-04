/**
 * @param {number[][]} mat
 * @returns {number}
 */
const numSpecial = mat => {
    const n = mat.length;
    const m = mat[0].length;

    let special = 0;
    const rows = new Array(n).fill(0);
    const cols = new Array(m).fill(0);

    // Count number of "1"s for each row and column
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mat[i][j] === 1) {
                rows[i]++;
                cols[j]++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // If the current "1" is the only one of the current row and column, it is special
            if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
                special++;
            }
        }
    }

    return special;
};

module.exports = { numSpecial };

console.log(
    numSpecial([
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0]
    ])
);
