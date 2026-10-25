/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const countPairs = (nums, k) => {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && (i * j) % k === 0) count++;
        }
    }

    return count;
};

module.exports = { countPairs };

console.log(countPairs([5, 5, 9, 2, 5, 5, 9, 2, 2, 5, 5, 6, 2, 2, 5, 2, 5, 4, 3], 7));
