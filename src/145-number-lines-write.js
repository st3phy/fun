/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = (widths, s) => {
    let lines = 1;
    let current = 0;

    for (const char of s) {
        // Get the lenght of the current character
        const lengthOfChar = widths[char.charCodeAt(0) - 97];
        // Write to current line if there is still space
        if (current + lengthOfChar <= 100) {
            current += lengthOfChar;
        }
        // Otherwise, go to next line
        else {
            lines++;
            current = lengthOfChar;
        }
    }

    return [lines, current];
};

module.exports = { numberOfLines };

console.log(
    numberOfLines(
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        "abcdefghijklmnopqrst"
    )
);
