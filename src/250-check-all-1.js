/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
const kLengthApart = (nums, k) => {
    // Last position where we found a 1
    let last = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        // When we find a 1, check difference between it and the last 1 found
        if (nums[i] === 1) {
            if (i - last <= k) return false;
            last = i;
        }
    }

    return true;
};

module.exports = { kLengthApart };

console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
