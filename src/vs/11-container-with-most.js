/**
 * @param {number[]} heights
 * @return {number}
 */
const maxArea = heights => {
    let max = 0;

    // Go from the outside in
    let left = 0;
    let right = heights.length - 1;

    // Until pointers meet
    while (left < right) {
        // Store new maximum
        max = Math.max(max, (right - left) * Math.min(heights[left], heights[right]));

        // Maximize the chance the next surface area larger than the current one
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};

module.exports = { maxArea };
