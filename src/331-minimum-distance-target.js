/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @returns {number}
 */
const getMinDistance = (nums, target, start) => {
    let min = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            min = Math.min(min, Math.abs(i - start));
        }
    }

    return min;
};

module.exports = { getMinDistance };

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
