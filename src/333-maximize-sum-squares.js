/**
 * @param {number} num
 * @param {number} sum
 * @returns {string}
 */
const maxSumOfSquares = (num, sum) => {
    // If a number formed only of 9s is smaller than the desired sum, the number cannot be formed
    if (num * 9 < sum) return "";

    // Add as many 9s as possible
    let max = "9".repeat(Math.floor(sum / 9));

    // Add any remaining digit
    if (sum % 9 > 0) max += String(sum % 9);

    // If we have digits left, add 0s
    return max + "0".repeat(num - max.length);
};

module.exports = { maxSumOfSquares };

console.log(maxSumOfSquares(1, 9));
