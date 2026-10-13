/**
 * @param {number[]} nums
 * @returns {number}
 */
const maxAscendingSum = nums => {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] === undefined || nums[i - 1] < nums[i]) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        max = Math.max(max, sum);
    }

    return max;
};

module.exports = { maxAscendingSum };

console.log(maxAscendingSum([100]));
