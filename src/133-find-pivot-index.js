/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = nums => {
    let leftSum = 0;

    // Add all numbers
    let sum = nums.reduce((acc, num) => acc + num, 0);

    for (let i = 0; i < nums.length; i++) {
        // Calculate sum to the right of current num
        const rightSum = sum - leftSum - nums[i];
        // If left sum equals right sum, we found the pivot
        if (leftSum === rightSum) {
            return i;
        } else {
            // Otherwise, increment left sum
            leftSum += nums[i];
        }
    }

    return -1;
};

module.exports = { pivotIndex };

console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
