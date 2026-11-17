/**
 * @param {number[]} nums
 * @returns {number}
 */
const maxSum = nums => {
    const getMaxDigit = num => {
        let max = 0;
        while (num) {
            max = Math.max(max, num % 10);
            num = Math.floor(num / 10);
        }
        return max;
    };

    let max = -1;

    // Keep track of the largest number seen so far per max digit
    const largest = new Array(10).fill(0);
    for (const num of nums) {
        const maxDigit = getMaxDigit(num);

        // If we have a previous number with the same max digit, sum the numbers and check agains max sum
        if (largest[maxDigit] > 0) {
            max = Math.max(max, num + largest[maxDigit]);
        }

        // If the current number is bigger than previously seen numbers with the same max digit, override max num
        if (num > largest[maxDigit]) {
            largest[maxDigit] = num;
        }
    }

    return max;
};

module.exports = { maxSum };

console.log(maxSum([68, 8, 100, 84, 80, 14, 88]));
