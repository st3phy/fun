/**
 * @param {number[]} nums
 * @returns {number}
 */
const maxAlternatingSum = nums => {
    let sum = 0;

    // Turn negative number to positive ones and sort descending
    nums = nums.map(a => Math.abs(a)).sort((a, b) => b - a);

    // Add first n/2 numbers and subsctract the next n/2 numbers
    for (let i = 0; i < Math.ceil(nums.length / 2); i++) {
        sum += nums[i] * nums[i];
    }
    for (let i = Math.ceil(nums.length / 2); i < nums.length; i++) {
        sum -= nums[i] * nums[i];
    }

    return sum;
};

module.exports = { maxAlternatingSum };

console.log(maxAlternatingSum([1, 2, 3]));
