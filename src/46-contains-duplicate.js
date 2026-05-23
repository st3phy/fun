/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    // Variable to store all previous values
    let found = new Set();

    for (let i = 0; i < nums.length; i++) {
        // If current element appeared before, return true
        if (found.has(nums[i])) return true;

        // Otherwise, add element to found
        found.add(nums[i]);
    }

    return false;

    /* One liner
    a Set in js can only store unique values so duplicates are automatically removed
    this means that the size of set will only be equal to the size of nums if all the numbers are different
    */
    // return new Set(nums).size !== nums.length;
};

module.exports = { containsDuplicate };

console.log(containsDuplicate([1, 2, 3, 1]));
