/**
 * @param {number[]} nums
 * @returns {number}
 */
const findClosestNumber = nums => {
    let closest = nums[0];

    // We are basically looking for the smallest number n or -n in case of negative numbers
    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i]) === Math.abs(closest)) {
            closest = Math.max(nums[i], closest);
        } else if (Math.abs(nums[i]) < Math.abs(closest)) {
            closest = nums[i];
        }
    }

    return closest;
};

module.exports = { findClosestNumber };

console.log(findClosestNumber([-4, -2, 1, 4, 8]));
