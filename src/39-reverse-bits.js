/**
 * @param {number} n
 * @return {number}
 */
const reverseBits = n => {
    let res = 0;

    for (i = 0; i < 32; i++) {
        // Shift res to the left to make space for the new bit
        res = res << 1;
        // Add the last bit from n to res (use OR operator)
        res = res | (n & 1);
        // move next bit from n into last position by shifting right
        n = n >> 1;
    }
    return res;
};

module.exports = { reverseBits };

console.log(reverseBits(43261596)); //964176192
