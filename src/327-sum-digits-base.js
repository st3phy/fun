/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
const sumBase = (n, k) => {
    let sum = 0;

    while (n > 0) {
        // Compute digit in base k and add it to sum
        sum += n % k;

        n = Math.floor(n / k);
    }

    return sum;
};

module.exports = { sumBase };

console.log(sumBase(10, 10));
