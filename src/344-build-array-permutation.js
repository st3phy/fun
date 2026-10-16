/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const buildArray = nums => {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
};

module.exports = { buildArray };

console.log(buildArray([5, 0, 1, 2, 3, 4]));
