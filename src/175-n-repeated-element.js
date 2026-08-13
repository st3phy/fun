/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = nums => {
    // // Create a set for the unique elements
    // const set = new Set();

    // for (const num of nums) {
    //     // If we already have the num in the set, it means we found the duplicate
    //     if (set.has(num)) {
    //         return num;
    //     }
    //     set.add(num);
    // }

    // O(1) extra space solution
    // Consider the example [2, 1, 3, 2] - observe that the repeating values can be at most 2 positions apart
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1] || nums[i] === nums[i + 2] || nums[i] === nums[i + 3]) {
            return nums[i];
        }
    }
};

module.exports = { repeatedNTimes };

console.log(repeatedNTimes([1, 2, 3, 3]));
