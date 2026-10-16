/**
 * @param {number[]} nums
 * @returns {number}
 */
const maxProductDifference = nums => {
    let max = -Infinity;
    let secondMax = -Infinity;
    let min = Infinity;
    let secondMin = -Infinity;

    for (const num of nums) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax) {
            secondMax = num;
        }
        if (num < min) {
            secondMin = min;
            min = num;
        } else if (num < secondMin) {
            secondMin = num;
        }
    }

    return max * secondMax - min * secondMin;
};

module.exports = { maxProductDifference };

console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
