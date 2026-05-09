/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
    // The first value is always "1"
    const res = [1];

    // For every row of Pascal's triangle
    for (let i = 1; i <= rowIndex; i++) {
        // The last value is always "1"
        res[i] = 1;

        // For every element that is not 1 (so every position except 0 and rowIndex)
        for (j = i - 1; j >= 1; j--) {
            // The value is the current value plus the previous one
            res[j] = res[j - 1] + res[j];
        }
    }

    return res;
};

module.exports = { getRow };

console.log(getRow(9));
