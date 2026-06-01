/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = n => {
    // Negative numbers and zero cannot be a power of 4
    // if (n <= 0) {
    //     return false;
    // }
    //
    // // While the number is divisible by 4, divide it by 4
    // while (n % 4 === 0) {
    //     n = n / 4;
    // }
    //
    // // If the number has been reduced to 1, it was a power of 4
    // return n === 1;
    //
    // One pass solution:
    // n is a power of 4 if it's a power of 2 and n % 3 === 1
    return n > 0 && n % 3 === 1 && (n & (n - 1)) === 0;
};

module.exports = { isPowerOfFour };
