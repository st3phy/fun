/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const minimumDifference = (nums, k) => {
    let min = Infinity;
    nums.sort((a, b) => a - b);

    for (let i = 0; i <= nums.length - k; i++) {
        min = Math.min(min, nums[i - 1 + k] - nums[i]);
    }

    return min;
};

module.exports = { minimumDifference };

console.log(minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6));
