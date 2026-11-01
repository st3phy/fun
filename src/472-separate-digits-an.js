/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const separateDigits = nums => {
    const res = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        while (nums[i] > 0) {
            res.push(nums[i] % 10);
            nums[i] = Math.floor(nums[i] / 10);
        }
    }
    return res.reverse();
};

module.exports = { separateDigits };

console.log(separateDigits([13, 25, 83, 77]));
