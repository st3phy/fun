/**
 * @param {string} s
 * @returns {boolean}
 */
const checkZeroOnes = s => {
    let ones = 0;
    let maxOnes = 0;
    let zeroes = 0;
    let maxZeroes = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 0) {
            // If it is a continugos zero, add it to count
            if (i > 0 && s[i - 1] == 0) {
                zeroes++;
            } else {
                // Otherwise, restart count
                zeroes = 1;
            }
        } else {
            if (i > 0 && s[i - 1] == 1) {
                ones++;
            } else {
                ones = 1;
            }
        }
        maxZeroes = Math.max(maxZeroes, zeroes);
        maxOnes = Math.max(maxOnes, ones);
    }

    return maxOnes > maxZeroes;
};

module.exports = { checkZeroOnes };

console.log(checkZeroOnes("1"));
