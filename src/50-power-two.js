/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
    if (n <= 0) {
        return false;
    }

    while (n > 1) {
        // Divide number by 2
        n = n / 2;

        // If the reslt is not an integer, return false
        if (n !== Math.floor(n)) {
            return false;
        }
    }

    return true;
};

module.exports = { isPowerOfTwo };
