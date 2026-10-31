/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const applyOperations = nums => {
    // Keep track of the last index with a non-zero value
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;

        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }

        // If we have zeroes before current i, add current value to the last non-zero index
        if (nonZeroIndex !== i) {
            nums[nonZeroIndex] = nums[i];
            nums[i] = 0;
        }
        nonZeroIndex++;
    }

    return nums;
};

module.exports = { applyOperations };

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
