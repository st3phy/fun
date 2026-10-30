/**
 * @param {number[]} nums
 * @returns {boolean}
 */
const findSubarrays = nums => {
    const sums = new Set();

    for (let i = 0; i < nums.length - 1; i++) {
        const currSum = nums[i] + nums[i + 1];
        if (sums.has(currSum)) return true;
        sums.add(currSum);
    }

    return false;
};

module.exports = { findSubarrays };

console.log(findSubarrays([4, 2, 4]));
