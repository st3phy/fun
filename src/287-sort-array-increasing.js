/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const frequencySort = nums => {
    // Count frequency
    const freq = new Map();
    for (let i = 0; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }

    nums.sort((a, b) => {
        // If the frequencies are equal, return sort descending
        if (freq.get(a) === freq.get(b)) {
            return b - a;
        } else {
            // Sort ascending by frequency
            return freq.get(a) - freq.get(b);
        }
    });

    return nums;
};

module.exports = { frequencySort };

console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
