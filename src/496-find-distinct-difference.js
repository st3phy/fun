/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const distinctDifferenceArray = nums => {
    const n = nums.length;
    const res = [];

    const left = new Set();
    for (let i = 0; i < n; i++) {
        left.add(nums[i]);
        res[i] = left.size;
    }

    const right = new Set();
    for (let i = n - 1; i >= 1; i--) {
        right.add(nums[i]);
        res[i - 1] -= right.size;
    }

    return res;
};

module.exports = { distinctDifferenceArray };

console.log(distinctDifferenceArray([37, 37, 37, 37, 33]));
