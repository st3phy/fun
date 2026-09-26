/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const minSubsequence = nums => {
    const sum = nums.reduce((acc, val) => acc + val, 0);

    nums.sort((a, b) => b - a);

    let subsequenceSum = 0;

    for (let i = 0; i < nums.length; i++) {
        subsequenceSum += nums[i];
        if (subsequenceSum > sum - subsequenceSum) {
            return nums.slice(0, i + 1);
        }
    }
    return nums;
};

module.exports = { minSubsequence };

console.log(minSubsequence([4, 3, 10, 9, 8]));
