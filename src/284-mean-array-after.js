/**
 * @param {number[]} arr
 * @returns {number}
 */
const trimMean = arr => {
    const n = arr.length;
    const fivePercent = Math.floor(n * 0.05);
    arr.sort((a, b) => a - b);

    let sum = 0;
    for (let i = fivePercent; i < arr.length - fivePercent; i++) {
        sum += arr[i];
    }

    return Number((sum / (n - 2 * fivePercent)).toFixed(5));
};

module.exports = { trimMean };

console.log(trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]));
