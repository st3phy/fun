/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const maximizeSum = (nums, k) => {
    let max = Math.max(...nums);

    return k * (max + (k - 1) / 2);
};

module.exports = { maximizeSum };

console.log(maximizeSum([1, 2, 3, 4, 5], 3));
