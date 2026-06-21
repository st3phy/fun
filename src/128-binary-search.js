/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) {
            return middle;
        }
        if (target > nums[middle]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return -1;
};

module.exports = { search };

console.log(search([-1, 0, 3, 5, 9, 12], 9));
