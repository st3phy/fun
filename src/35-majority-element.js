/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    // Hashmap solution - Time complexity O(n), space complexity O(n)
    // Store how many times each number appears
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        // Increment count if number exists, otherwise initialize it to 1
        hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1;

        // If count becomes greater than n / 2, we found the majority element
        if (hashMap[nums[i]] > Math.floor(nums.length / 2)) {
            return nums[i];
        }
    }
};

module.exports = { majorityElement };

console.log(majorityElement([1, 2, 2, 2, 1]));
