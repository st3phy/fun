/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const countPairs = (nums, target) => {
    let pairs = 0;
    nums = nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            // nums[left] pairs fwith every element from left + 1 to right
            pairs += right - left;
            left++;
        } else {
            // nums[right] is too big for any subsequent left
            right--;
        }
    }

    return pairs;
};

module.exports = { countPairs };

console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2));
