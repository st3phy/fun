/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => {
    // Numbers smaller than 1 cannot be a power of three
    // if (n < 1) return false;

    // while (n !== 1) {
    //     // If the number is not perfectly divisible by 3, it is not a power of three
    //     if (n % 3 !== 0) return false;

    //     // Reduce number
    //     n /= 3;
    // }

    // return true;

    /* Power of three without loops:
    The largest 32-bit integer that is a power of three is 3^19 
    A number is a power of three if it divides this number evenly*/
    return n > 0 && 3 ** 19 % n === 0;
};

module.exports = { isPowerOfThree };
