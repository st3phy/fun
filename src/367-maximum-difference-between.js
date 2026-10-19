/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = nums => {
    let diff = -1;
    let small = Infinity;

    for (let i = 0; i < nums.length; i++) {
        // Search for smaller numbers
        if (nums[i] < small) {
            small = nums[i];
        }
        if (nums[i] > small) {
            diff = Math.max(diff, nums[i] - small);
        }
    }

    return diff;
};

module.exports = { maximumDifference };

console.log(maximumDifference([87, 68, 91, 86, 58, 63, 43, 98, 6, 40]));
