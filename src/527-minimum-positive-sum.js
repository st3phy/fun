/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
const minimumSumSubarray = (nums, l, r) => {
    let min = Infinity;

    const prefixSum = [0];
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = nums[i] + prefixSum[i];
    }

    for (let len = l; len <= r; len++) {
        for (let i = 0; i <= nums.length - len; i++) {
            // Sum of current window is nums [i ... i + len -1]
            let sum = prefixSum[i + len] - prefixSum[i];
            if (sum > 0 && sum < min) min = sum;
        }
    }

    return min === Infinity ? -1 : min;
};

module.exports = { minimumSumSubarray };

console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3));
