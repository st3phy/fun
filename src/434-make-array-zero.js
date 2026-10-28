/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = nums => {
    const set = new Set(nums);

    return set.has(0) ? set.size - 1 : set.size;
};

module.exports = { minimumOperations };

console.log(minimumOperations([1, 5, 0, 3, 5]));
