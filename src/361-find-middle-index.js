/**
 * @param {number[]} nums
 * @returns {number}
 */
const findMiddleIndex = nums => {
    const sum = nums.reduce((acc, val) => acc + val, 0);

    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        // Left sum must equal half of the total sum - current element
        const leftTarget = (sum - nums[i]) / 2;

        if (leftSum === leftTarget) return i;

        // Add current value to left sum
        leftSum += nums[i];
    }

    return -1;
};

module.exports = { findMiddleIndex };

console.log(findMiddleIndex([1, -1, 4]));
