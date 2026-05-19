/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = n => {
    let res = 0;

    // Shift bits to right and count each set bit
    // while (n > 0) {
    //     res += n & 1;
    //     n = n >> 1;
    // }

    // Best solution - Brian Kernighan’s algorithm
    while (n > 0) {
        // When substracting one, the lowest 1 becomes 0, all bits to the right become 1
        // Ex: 101000 - 1 = 100111
        // Now, when we do n & (n-1), the previously lowest 1 disappears
        // Ex 101000 & 100111 = 100000
        // So each loop removes exactly one 1-bit
        n = n & (n - 1);
        res++;
    }

    return res;
};

module.exports = { hammingWeight };

console.log(hammingWeight(2147483645)); // 30
