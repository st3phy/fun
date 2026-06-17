/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = nums => {
    // Sort array
    // nums.sort((a, b) => a - b);
    // const len = nums.length - 1;
    // // The largest product can only come from:
    // // The two smallest numbers (possibly negative) and the largest number.
    // const option1 = nums[0] * nums[1] * nums[len];
    // // The three largest numbers
    // const option2 = nums[len] * nums[len - 1] * nums[len - 2];
    // return Math.max(option1, option2);

    // Time complexity O(n) solution
    // The largest product can only come from:
    // - the two smallest numbers (possibly negative) and the largest number.
    // - the three largest numbers
    let max = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;
    let min = Infinity;
    let secondMin = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            thirdMax = secondMax;
            secondMax = max;
            max = nums[i];
        } else if (nums[i] > secondMax) {
            thirdMax = secondMax;
            secondMax = nums[i];
        } else if (nums[i] > thirdMax) {
            thirdMax = nums[i];
        }
        if (nums[i] < min) {
            secondMin = min;
            min = nums[i];
        } else if (nums[i] < secondMin) {
            secondMin = nums[i];
        }
    }

    return Math.max(max * secondMax * thirdMax, max * min * secondMin);
};

module.exports = { maximumProduct };

console.log(maximumProduct([-100, -98, -1, 100, 99, 4]));
