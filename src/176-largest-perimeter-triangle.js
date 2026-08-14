/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = nums => {
    // Sort array descending
    nums.sort((a, b) => b - a);

    // Get values 3 at a time and see if they can form a triangle
    // For 3 sides to make a triangle they must follow the rule a < b + c where a is the largest side
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            // Since the array is sorted descending, the first time we get a triangle, it will have the largest perimeter
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }

    return 0;
};

module.exports = { largestPerimeter };

console.log(largestPerimeter([1, 2, 1, 10]));
