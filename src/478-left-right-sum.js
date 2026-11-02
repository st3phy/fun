/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = nums => {
    const diff = [];
    let leftSum = 0;
    const total = nums.reduce((val, sum) => val + sum, 0);

    for (let i = 0; i < nums.length; i++) {
        const rightSum = total - nums[i] - leftSum;
        diff[i] = Math.abs(rightSum - leftSum);
        leftSum += nums[i];
    }

    return diff;
};

module.exports = { leftRightDifference };

console.log(leftRightDifference([10, 4, 8, 3]));
