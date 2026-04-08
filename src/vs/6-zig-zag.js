/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    // Invalid number of rows
    if (numRows <= 1) {
        return s;
    }

    // Prepare array of rows (empty strings)
    const rows = Array(numRows).fill("");

    // Movement direction
    let down = false;
    let rowIndex = 0;
    for (let index = 0; index < s.length; index++) {
        rows[rowIndex] += s[index];

        // Change direction
        if (0 === rowIndex || numRows - 1 === rowIndex) {
            down = !down;
        }

        // Move to the next row
        rowIndex += down ? 1 : -1;
    }

    return rows.join("");
};

module.exports = { convert };
