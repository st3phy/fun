/**
 * @param {number[][]} nums
 * @returns {number[]}
 */
const intersection = nums => {
    const n = nums.length;

    // Count how many times each number appears over all arrays
    const freq = new Map();
    for (const arr of nums) {
        for (const num of arr) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
    }

    // We need the numbers that appear exactly n times
    const res = [];
    for (const [num, f] of freq.entries()) {
        if (f === n) {
            res.push(num);
        }
    }

    return res.sort((a, b) => a - b);
};

module.exports = { intersection };

console.log(
    intersection([
        [3, 1, 2, 4, 5],
        [1, 2, 3, 4],
        [3, 4, 5, 6]
    ])
);
