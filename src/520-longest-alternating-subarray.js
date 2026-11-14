/**
 * @param {number[]} nums
 * @returns {number}
 */
const alternatingSubarray = nums => {
    let maxLen = 0;
    let currLen = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        // Found an increasing pair
        if (nums[i + 1] - nums[i] === 1) {
            // If current length is even, it means the previous pair was also increasing, so reset current length to 2 (the current pair)
            if (currLen % 2 === 0) {
                currLen = 2;
            } else {
                // Otherwise, just add current number to current length
                currLen++;
            }
        }
        // Found a decreasing pair and the previous pair was increasing
        else if (nums[i + 1] - nums[i] === -1 && nums[i] - nums[i - 1] === 1) {
            currLen++;
        } else {
            currLen = 0;
        }
        maxLen = Math.max(maxLen, currLen);
    }

    return maxLen || -1;
};

module.exports = { alternatingSubarray };

console.log(alternatingSubarray([6, 7, 6, 5, 6]));
