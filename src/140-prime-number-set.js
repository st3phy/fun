/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const countPrimeSetBits = (left, right) => {
    const countSetBits = num => {
        let count = 0;
        while (num > 0) {
            // each iteration removes the rightmost set bit from num
            num &= num - 1;
            count++;
        }
        return count;
    };

    // since right <= 10^6 , the biggest set-bit count is 20
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);

    let count = 0;
    for (let number = left; number <= right; number++) {
        if (primes.has(countSetBits(number))) {
            count++;
        }
    }

    return count;
};

module.exports = { countPrimeSetBits };

console.log(countPrimeSetBits(10, 15));
