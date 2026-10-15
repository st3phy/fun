/**
 * @param {number[]} nums
 * @returns {number}
 */
const sumCounts = nums => {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const unique = new Set();
        for (let j = i; j < nums.length; j++) {
            unique.add(nums[j]);
            count += unique.size * unique.size;
        }
    }

    return count;
};

module.exports = { sumCounts };

console.log(sumCounts([1, 2, 3]));
