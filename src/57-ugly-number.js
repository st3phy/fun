/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = n => {
    if (n <= 0) {
        return false;
    }

    // Reduce the number by the undesired prime factors
    for (const prime of [2, 3, 5]) {
        while (n % prime === 0) {
            n /= prime;
        }
    }

    // If the remaining number is one, it is ugly
    return n === 1;
};

module.exports = { isUgly };
