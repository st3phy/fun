/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = columnNumber => {
    const res = [];

    while (columnNumber > 0) {
        // Shift to 0-base for normal base64 conversion
        columnNumber--;

        // Get current character position (0-26)
        const remainder = columnNumber % 26;

        // Push it to the results array after converting it to associated ASCII char
        res.push(String.fromCharCode(65 + remainder));

        // Move to next "digit"
        columnNumber = Math.floor(columnNumber / 26);
    }

    return res.reverse().join("");
};

module.exports = { convertToTitle };

console.log(convertToTitle(701));
