/**
 * @param {number[]} nums
 * @returns {number}
 */
const findNonMinOrMax = nums => {
    if (nums.length < 3) return -1;

    // Find min and max from first 3 numbers - the other one is neither min nor max for the whole array
    if (nums[0] > nums[1] !== nums[0] > nums[2]) return nums[0];
    if (nums[1] > nums[0] !== nums[1] > nums[2]) return nums[1];
    return nums[2];
};

module.exports = { findNonMinOrMax };

console.log(findNonMinOrMax([3, 2, 1, 4]));
