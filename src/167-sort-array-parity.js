/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = nums => {
    // // Search pointer
    // let search;

    // for (let i = 0; i < nums.length; i++) {
    //     // Save current position
    //     search = i;

    //     // While the current position and current number aren't both odd or even
    //     while (i % 2 !== nums[search] % 2) {
    //         // Move to the next position
    //         search++;
    //     }

    //     // Swap current position to corresponding odd/even value
    //     [nums[i], nums[search]] = [nums[search], nums[i]];
    // }

    // return nums;

    // Two-pointer approach
    let even = 0;
    let odd = 1;

    while (even < nums.length && odd < nums.length) {
        // If value for even position is even, move forward with even pointer
        if (nums[even] % 2 === 0) {
            even += 2;
            continue;
        }

        // If value for odd position is odd, move forward with odd pointer
        if (nums[odd] % 2 === 1) {
            odd += 2;
            continue;
        }

        // Both positions are icorrect so swap positions
        [nums[even], nums[odd]] = [nums[odd], nums[even]];
        // Move forward with both pointers
        even += 2;
        odd += 2;
    }

    return nums;
};

module.exports = { sortArrayByParityII };

console.log(sortArrayByParityII([4, 2, 5, 7, 3, 4, 11, 6]));
