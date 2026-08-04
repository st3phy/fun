/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = nums => {
    const len = nums.length;
    let ascending = true;
    let descending = true;

    for (let i = 0; i < len - 1; i++) {
        // if number are descendic
        if (nums[i] > nums[i + 1]) {
            // and we previously found that the array is not descending
            if (!descending) {
                // the array is not monotonic
                return false;
            }
            // array is not ascending
            ascending = false;
        }
        // if numbers are ascending
        else if (nums[i] < nums[i + 1]) {
            // and we previously found that the array is not ascending
            if (!ascending) {
                // the array is not monotonic
                return false;
            }
            // array is not descending
            descending = false;
        }
    }

    return true;
};

module.exports = { isMonotonic };

console.log(isMonotonic([1, 3, 2]));
