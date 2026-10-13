/**
 * @param {number[]} nums
 * @returns {boolean}
 */
const canBeIncreasing = nums => {
    let found = false;

    for (let i = 1; i < nums.length; i++) {
        // Found element that is not strictly increasing
        if (nums[i - 1] >= nums[i]) {
            // We previously found another element that is not strictly increasing
            if (found) return false;
            found = true;

            // Removing nums[i-1] does not leave the nums sorted
            // and
            // Removing nums[i] does not leave the nums sorted
            if (
                nums[i - 2] !== undefined &&
                nums[i - 2] >= nums[i] &&
                nums[i + 1] !== undefined &&
                nums[i - 1] >= nums[i + 1]
            ) {
                return false;
            }
        }
    }

    return true;
};

module.exports = { canBeIncreasing };

console.log(canBeIncreasing([105, 924, 32, 968]));
