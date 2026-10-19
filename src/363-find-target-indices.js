/**
 * @param {number[]} nums
 * @param {number} target
 * @@returns {number[]}
 */
const targetIndices = (nums, target) => {
    let smaller = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        // Count how many number are smaller than the target - this will give the possible first inidex of target
        if (nums[i] < target) {
            smaller++;
        } else if (nums[i] === target) {
            count++;
        }
    }

    const indices = Array.from({ length: count }, (_, i) => smaller + i);

    return indices;
};

module.exports = { targetIndices };

console.log(targetIndices([1, 2, 5, 2, 3], 2));
