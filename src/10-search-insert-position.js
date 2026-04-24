/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    // O(log n) runtime complexity - so faster than linear - runtime: 0ms

    // Check for margins
    // if (target < nums[0]) {
    //     return 0;
    // }
    // if (target > nums[nums.length - 1]) {
    //     return nums.length;
    // }

    // let start = 0;
    // let end = nums.length;

    // // Go half by half => O(log n) complexity
    // for (let i = start; i < end; i++) {
    //     let middle = Math.round(end / 2) - 1;

    //     // if the middle value equals the target OR the middle value is bigger than target and the previous value is smaller than target
    //     if (target == nums[i] || (nums[i - 1] < target && nums[i] > target)) {
    //         // Return index
    //         return i;
    //     }

    //     // Check if the target is in the first half or second half of current array
    //     if (target < nums[i]) {
    //         start = 0;
    //         end = middle;
    //     } else {
    //         start = middle;
    //         end = nums.length; // wrong here
    //     }
    // }

    // Clean binary search
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // at this point, when nums[mid] == target it means that left = mid, so right becomes < left, which breaks loop
        if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

module.exports = { searchInsert };

console.log(searchInsert([2, 3, 5, 6], 2));
