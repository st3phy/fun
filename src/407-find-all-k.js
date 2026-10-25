/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @returns {number[]}
 */
const findKDistantIndices = (nums, key, k) => {
    const n = nums.length;
    let high = 0;
    const indices = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] === key) {
            const low = Math.max(high, i - k);
            high = Math.min(n - 1, i + k) + 1;

            for (let j = low; j < high; j++) {
                indices.push(j);
            }
        }
    }

    return indices;
};

module.exports = { findKDistantIndices };

console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2));
