/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @returns {number}
 */
const maxDivScore = (nums, divisors) => {
    let minDiv = 0;
    let maxCount = -1;

    for (const div of divisors) {
        let count = 0;
        for (const num of nums) {
            if (num % div === 0) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            minDiv = div;
        } else if (count === maxCount) {
            minDiv = Math.min(div, minDiv);
        }
    }

    return minDiv;
};

module.exports = { maxDivScore };

console.log(maxDivScore([1], [5, 7, 5]));
