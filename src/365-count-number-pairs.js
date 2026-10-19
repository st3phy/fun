/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const countKDifference = (nums, k) => {
    let count = 0;
    const freq = new Map();

    // |a - b| = k <=> a - b = k && b - a = k <=> a = b + k && a = b - k
    for (const num of nums) {
        // Check how many prevsious numbers equal num + k or num - k
        count += freq.get(num + k) || 0;
        count += freq.get(num - k) || 0;

        freq.set(num, (freq.get(num) || 0) + 1);
    }

    return count;
};

module.exports = { countKDifference };

console.log(countKDifference([3, 2, 1, 5, 4], 2));
