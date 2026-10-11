/**
 * @param {number[]} nums
 * @returns {boolean}
 */
const check = nums => {
    let ascending = true;

    for (let i = 1; i < nums.length; i++) {
        // If we find a non-ascending element
        if (nums[i] < nums[i - 1]) {
            // If we previously found another non-ascending element, the original array was not sorted
            if (!ascending) return false;
            ascending = false;
        }
    }

    // If we found a non-ascending element, the rotation must have caused the last element to be smaller or equal to the first
    if (!ascending) return nums[0] >= nums[nums.length - 1];

    return true;
};

module.exports = { check };

console.log(check([6, 10, 6]));
