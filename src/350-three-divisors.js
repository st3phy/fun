/**
 * @param {number} n
 * @returns {boolean}
 */
const isThree = n => {
    if (n < 4) return false;

    const isPrime = x => {
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) return false;
        }
        return true;
    };

    // In order for n to have exactly three divisors including 1 and itself, it much be a square of a prime number
    if (!Number.isInteger(Math.sqrt(n))) return false;
    if (isPrime(Math.sqrt(n))) return true;

    return false;
};

module.exports = { isThree };

console.log(isThree(12));
