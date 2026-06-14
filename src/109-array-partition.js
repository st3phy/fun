/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = nums => {
    // The pairs should be (smalles, next_to_smallest) and so on to maximize the mins
    // sort array ascending
    nums.sort((a, b) => a - b);

    let sum = 0;
    // Add every other number starting from position 0
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }

    return sum;
};

module.exports = { arrayPairSum };

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
