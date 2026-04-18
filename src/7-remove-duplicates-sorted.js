/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
    // Using splice() to remove duplicates - 114ms
    // let pointer = nums[0];
    // let removed = 0;
    // for (let i = 1; i < nums.length; i++) {
    //     // If current value is a duplicate
    //     if (pointer === nums[i] && nums[i] != "-") {
    //         // Remove the value
    //         nums.splice(i, 1);
    //         // add a "-" to the end of array to keep length intact
    //         nums[nums.length] = "-";
    //         // Go back one step since the whole array shifted at splice
    //         i--;
    //         // Increment the number of removed values
    //         removed++;
    //     } else {
    //         pointer = nums[i];
    //     }
    // }
    // return nums.length - removed;

    // 2 pointers - 16ms
    // let i = 0,
    //     k = 1;

    // // While we still have numbers in the array
    // while (undefined !== nums[i]) {
    //     // Comapre current value with the next ones until we find a bigger one
    //     while (nums[i] >= nums[k]) {
    //         // Increment the pointer
    //         k++;
    //     }
    //     // Move the found value to the next position
    //     nums[i + 1] = nums[k];
    //     i++;
    //     // If the pointer has reached the end, we are finished
    //     if (k > nums.length - 1) {
    //         break;
    //     }
    //     // Set pointer to current position +1
    //     k = i + 1;
    // }

    // return i;

    // Fastest solution - 0ms
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return nums.length == 0 ? 0 : k;
};

module.exports = { removeDuplicates };
