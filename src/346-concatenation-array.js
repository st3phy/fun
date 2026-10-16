/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const getConcatenation = nums => {
    const ans = [];
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }

    return ans;
};

module.exports = { getConcatenation };

console.log(getConcatenation([1, 3, 2, 1]));
