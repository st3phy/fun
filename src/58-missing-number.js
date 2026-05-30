/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    // Get the number of numbers
    const n = nums.length;

    // Calculate the sum of the numbers
    let sum = (n * (n + 1)) / 2;

    // Remove the found number one by one until you are left with the missing one
    for (let i = 0; i < n; i++) {
        sum -= nums[i];
    }

    return sum;

    // XOR solution:
    // let sum = nums.length;
    // for (let i = 0; i < nums.length; i++) {
    //     sum ^= i ^ nums[i];
    // }

    // return sum;
};

module.exports = { missingNumber };
