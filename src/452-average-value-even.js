/**
 * @param {number[]} nums
 * @returns {number}
 */
const averageValue = nums => {
    let count = 0;
    let sum = 0;

    for (const num of nums) {
        if (num % 6 === 0) {
            count++;
            sum += num;
        }
    }

    return Math.floor(sum / count) || 0;
};

module.exports = { averageValue };

console.log(
    averageValue([
        43, 9, 75, 76, 25, 96, 46, 85, 19, 29, 88, 2, 5, 24, 60, 26, 76, 24, 96, 82, 97, 97, 72, 35, 21, 77, 82, 30, 94,
        55, 76, 94, 51
    ])
);
