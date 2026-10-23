/**
 * @param {number} num
 * @returns {number}
 */
const minimumSum = num => {
    const digits = [num % 10, Math.floor(num / 10) % 10, Math.floor(num / 100) % 10, Math.floor(num / 1000) % 10];
    digits.sort((a, b) => a - b);

    const first = digits[0] * 10 + digits[3];
    const second = digits[1] * 10 + digits[2];

    return first + second;
};

module.exports = { minimumSum };

console.log(minimumSum(2932));
