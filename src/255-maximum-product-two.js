/**
 * @param {number[]} nums
 * @returns {number}
 */
const maxProduct = nums => {
    let max = 0;
    let maxBis = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            maxBis = max;
            max = nums[i];
        } else if (nums[i] > maxBis) {
            maxBis = nums[i];
        }
    }

    return (max - 1) * (maxBis - 1);
};

module.exports = { maxProduct };

console.log(maxProduct([10, 8, 5]));
