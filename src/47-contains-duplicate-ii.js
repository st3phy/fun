/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    // Store each number and its most recent index
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        // If number has already been seen and the difference between indices <= k, return true
        if (undefined !== seen[nums[i]] && i - seen[nums[i]] <= k) {
            return true;
        }
        // Update latest index of number
        seen[nums[i]] = i;
    }

    return false;
};

module.exports = { containsNearbyDuplicate };
