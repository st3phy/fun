/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = nums => {
    let powers = [];
    let left = 0;
    let right = nums.length - 1;
    let position = right;

    // Use two pointers, one starting at beginning of array and the other at the end
    while (left <= right) {
        // Compute the two powers
        const leftPow = nums[left] ** 2;
        const rightPow = nums[right] ** 2;

        // Add the bigger power to the results from right to left array and move pointers accordingly
        if (leftPow > rightPow) {
            powers[position--] = leftPow;
            left++;
        } else {
            powers[position--] = rightPow;
            right--;
        }
    }

    return powers;
};

module.exports = { sortedSquares };

console.log(sortedSquares([-4, -1, 0, 3, 10]));
