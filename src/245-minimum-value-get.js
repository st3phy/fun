/**
 * @param {number[]} nums
 * @returns {number}
 */
const minStartValue = nums => {
    let prevSum = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prevSum[i] = prevSum[i - 1] + nums[i];
    }

    let min = Math.min(...prevSum);

    return min < 0 ? -min + 1 : 1;
};

module.exports = { minStartValue };

console.log(minStartValue([-3, 2, -3, 4, 2]));
