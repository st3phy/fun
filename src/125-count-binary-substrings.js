/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = s => {
    let res = 0;
    // Pointer to position of current batch of like bits
    let curr = 0;
    // Number of previous batch of like bits
    let prev = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1]) {
            // Add non-empty substrings formed by current like bits and prev like bits
            res += Math.min(prev, i + 1 - curr);

            // Save current size of like bits
            prev = i + 1 - curr;
            // Set position of next batch of like bits
            curr = i + 1;
        }
    }

    return res;
};
module.exports = { countBinarySubstrings };

console.log(countBinarySubstrings("00011100"));
