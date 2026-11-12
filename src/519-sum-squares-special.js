/**
 * @param {number[]} nums
 * @returns {number}
 */
const sumOfSquares = nums => {
    n = nums.length;
    let sum = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            sum += nums[i - 1] * nums[i - 1];
            if (i * i !== n) {
                sum += nums[n / i - 1] * nums[n / i - 1];
            }
        }
    }

    return sum;
};

module.exports = { sumOfSquares };

console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));
