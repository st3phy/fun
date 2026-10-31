/**
 * @param {number[]} nums
 * @returns {number}
 */
const distinctAverages = nums => {
    const set = new Set();
    nums.sort((a, b) => a - b);
    const n = nums.length;

    for (let i = 0; i < n / 2; i++) {
        set.add((nums[i] + nums[n - 1 - i]) / 2);
    }

    return set.size;
};

module.exports = { distinctAverages };

console.log(distinctAverages([4, 1, 4, 0, 3, 5]));
