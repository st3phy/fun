/**
 * @param {number[]} nums
 * @returns {number}
 */
const differenceOfSum = nums => {
    let sum = 0;

    for (let num of nums) {
        if (num < 10) continue;
        sum += num;
        let digitSum = 0;
        while (num > 0) {
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }
        sum -= digitSum;
    }

    return sum;
};

module.exports = { differenceOfSum };

console.log(differenceOfSum([1, 2, 3, 12, 123, 1234, 1999]));
