/**
 * @param {string} s
 * @returns {number}
 */
const maxScore = s => {
    // Count all ones
    let ones = 0;
    for (const char of s) {
        if (char === "1") ones++;
    }

    let max = 0;
    let zeroes = 0;
    // Right side must have at least one char, so stop at s.length - 2
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") {
            zeroes++;
        } else {
            ones--;
        }

        max = Math.max(max, zeroes + ones);
    }

    return max;
};

module.exports = { maxScore };

console.log(maxScore("011101"));
