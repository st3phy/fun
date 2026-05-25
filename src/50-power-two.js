/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
    // A power of two in binary always have exactly one 1 bit (1; 10; 100; 1000 etc)
    // So (n & (n - 1)) will always be zero (ex: 1000 & 0111)
    return n > 0 && (n & (n - 1)) === 0;
};

module.exports = { isPowerOfTwo };
