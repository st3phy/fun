/**
 * @param {number[]} nums
 * @returns {number}
 */
const findGCD = nums => {
    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    let max = 0;
    let min = 1001;

    for (const num of nums) {
        if (num > max) max = num;
        if (num < min) min = num;
    }

    return gcd(max, min);
};

module.exports = { findGCD };

console.log(findGCD([2, 5, 6, 9, 10]));
