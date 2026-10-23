/**
 * @param {number[]} nums
 * @returns {number}
 */
const countElements = nums => {
    const n = nums.length;

    // Sort array
    nums.sort((a, b) => a - b);

    // Find position of first element strictly bigger than first element and last element strictly smaller than last element
    let first = 0;
    let foundFirst = false;
    let last = -1;
    let foundLast = false;
    for (let i = 1; i < n; i++) {
        if (!foundFirst && nums[i] > nums[0]) {
            first = i;
            foundFirst = true;
        }
        if (!foundLast && nums[n - 1 - i] < nums[n - 1]) {
            last = n - 1 - i;
            foundLast = true;
        }
        if (foundFirst && foundLast) break;
    }

    return last - first + 1;
};

module.exports = { countElements };

console.log(countElements([3, 3, 3]));
