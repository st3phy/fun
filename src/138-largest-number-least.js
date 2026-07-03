/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = nums => {
    // Get the maximum and second maximum numbers
    let max = 0;
    let index;
    let secondMax = 0;

    for (let i = 0; i < nums.length; i++) {
        // If we found a new max
        if (nums[i] > max) {
            // The second max becomes the old max
            secondMax = max;
            max = nums[i];
            // Save index of current max number
            index = i;
        }
        // If the current number is not bigger than max, but is bigger than secondMax
        else if (nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }

    // If the max number is twice as big as the second max, it is twice as big as all other numbers
    return max >= secondMax * 2 ? index : -1;
};

module.exports = { dominantIndex };

console.log(dominantIndex([0, 0, 3, 2]));
