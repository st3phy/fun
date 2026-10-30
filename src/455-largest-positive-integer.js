/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = nums => {
    let max = -1;
    const set = new Set(nums);

    for (const num of nums) {
        if (set.has(-num)) {
            max = Math.max(max, Math.abs(num));
        }
    }

    return max;
};

module.exports = { findMaxK };

console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
