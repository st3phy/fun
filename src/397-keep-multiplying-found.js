/**
 * @param {number[]} nums
 * @param {number} original
 * @returns {number}
 */
const findFinalValue = (nums, original) => {
    nums.sort((a, b) => a - b);

    for (const num of nums) {
        if (num === original) original *= 2;
    }

    return original;
};

module.exports = { findFinalValue };

console.log(findFinalValue([5, 3, 6, 1, 12]));
