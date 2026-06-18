/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
    let maxSum = 0;
    // Compute sum for first k numbers
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }

    let currSum = maxSum;

    for (let i = k; i < nums.length; i++) {
        // Current sum is previous sum minus first number of previous sum plus current number
        currSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum / k;
};

module.exports = { findMaxAverage };

console.log(findMaxAverage([0, 4, 0, 3, 2], 1)); // 12.75
