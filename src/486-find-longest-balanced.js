/**
 * @param {string} s
 * @return {number}
 */
const findTheLongestBalancedSubstring = s => {
    let zeroes = 0;
    let ones = 0;
    let max = 0;
    let i = 0;

    while (i < s.length) {
        while (s[i] === "0") {
            zeroes++;
            i++;
        }
        while (s[i] === "1") {
            ones++;
            i++;
        }
        max = Math.max(max, Math.min(zeroes, ones) * 2);
        zeroes = 0;
        ones = 0;
    }

    return max;
};

module.exports = { findTheLongestBalancedSubstring };

console.log(findTheLongestBalancedSubstring("01000111"));
