/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
    // The current position where a non-zero should be
    let curr = 0;

    // The number of zeroes in the array
    let zeroes = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[curr++] = nums[i];
        } else {
            zeroes++;
        }
    }

    // Add zeroes to the end of array
    for (let i = nums.length - 1; i > nums.length - 1 - zeroes; i--) {
        nums[i] = 0;
    }

    return nums;
};

module.exports = { moveZeroes };

console.log(moveZeroes([0, 1, 0, 3, 12]));
