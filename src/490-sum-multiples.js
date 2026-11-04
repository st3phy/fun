/**
 * @param {number} n
 * @returns {number}
 */
const sumOfMultiples = n => {
    // Sum of all multiples of divisor that are <= n
    const sum = divisor => {
        // Number of multiples
        const count = Math.floor(n / divisor);
        // sum = divisor * (1 + 2 + ... + count)
        return ((count * (count + 1)) / 2) * divisor;
    };

    // Add sums for multiples of 3, 5 and 7
    // Detract sums for multiples of pairs (3*5, 3*7, 5*7), since they were added twice
    // Add sum for multiple of 3s (3*5*7) since they were added 3 times and removed 3 times
    return sum(3) + sum(5) + sum(7) - sum(15) - sum(21) - sum(35) + sum(105);
};

module.exports = { sumOfMultiples };

console.log(sumOfMultiples(100));
