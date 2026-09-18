/**
 * @param {number} n
 * @returns {number}
 */
const subtractProductAndSum = n => {
    let prod = 1;
    let sum = 0;

    while (n > 0) {
        const digit = n % 10;

        prod *= digit;
        sum += digit;

        n = Math.floor(n / 10);
    }

    return prod - sum;
};

module.exports = { subtractProductAndSum };

console.log(subtractProductAndSum(4421));
