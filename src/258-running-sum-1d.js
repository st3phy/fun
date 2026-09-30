/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const runningSum = nums => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

module.exports = { runningSum };

console.log(runningSum([1, 1, 1, 1, 1]));
