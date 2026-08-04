/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestRangeI = (nums, k) => {
    // Find biggest and smaller numbers
    let max = 0,
        min = Infinity;
    for (const num of nums) {
        max = num > max ? num : max;
        min = num < min ? num : min;
    }

    let diff = max - min;
    let score = diff - 2 * k;

    return score > 0 ? score : 0;
};

module.exports = { smallestRangeI };

console.log(smallestRangeI([7, 2, 4], 3));
