/**
 * @param {string} s
 * @returns {number}
 */
const minimumMoves = s => {
    let count = 0;
    let i = 0;

    while (i < s.length) {
        if (s[i] === "X") {
            count++;
            i += 2;
        }
        i++;
    }

    return count;
};

module.exports = { minimumMoves };

console.log(minimumMoves("XXX"));
