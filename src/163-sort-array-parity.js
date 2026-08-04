/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = nums => {
    // set 2 pointers - one to look for even number, the other one for odd
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        // if left number if odd
        if (nums[left] & 1) {
            // if right number is even
            if (!(nums[right] & 1)) {
                // swap them and move pointers
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
            }
            right--;
        }
        // if left number is even
        else {
            // it stays where it is
            left++;
        }
    }

    return nums;
};

module.exports = { sortArrayByParity };

console.log(sortArrayByParity([3, 1, 2, 4]));
