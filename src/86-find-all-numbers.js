/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
    // // Store only the unique values of nums
    // let unique = new Set(nums);
    // let res = [];

    // // Go through range or possible values [1, n]
    // for (let i = 1; i <= nums.length; i++) {
    //     // If the values is not in the stores unique values of nums, add it to results array
    //     if (!unique.has(i)) {
    //         res.push(i);
    //     }
    // }

    // return res;

    const res = [];

    // Go through all of the numbers in the array
    for (const num of nums) {
        /** For every number, since the value is guaranteed to be between [1, n]
        Mark the index equivalent to that number as "seen" by making that position's value negative
        Since an arrays indices are between [0,n-1] the equivalent index for num is num-1
        Because the current number might have already been "seen", we want to use its absolute value 
        If the value is negative, so it has already been "seen", don't multiply by -1 again
        **/
        nums[Math.abs(num) - 1] *= nums[Math.abs(num) - 1] > 0 ? -1 : 1;
    }

    // Now, every index that has a positive value represents a disappeared value - don't forget to add 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }

    return res;
};

module.exports = { findDisappearedNumbers };

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
