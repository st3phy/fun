/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
    let max = 0;
    let consecutive = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            consecutive++;
            max = max < consecutive ? consecutive : max;
        } else {
            consecutive = 0;
        }
    }

    return max;
};

module.exports = { findMaxConsecutiveOnes };

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
