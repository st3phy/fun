/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = nums => {
    let maxLen = 1;
    let currLen = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            currLen++;
        } else {
            currLen = 1;
        }
        maxLen = Math.max(maxLen, currLen);
    }

    return maxLen;
};

module.exports = { findLengthOfLCIS };

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
