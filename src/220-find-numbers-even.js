/**
 * @param {number[]} nums
 * @returns {number}
 */
const findNumbers = nums => {
    // For numbers < 1e5 the numbers that have an even number of digits are in the ranges [10,99],[1000,9999] or 100000
    let count = 0;
    for (const n of nums) {
        if ((n >= 10 && n <= 99) || (n >= 1000 && n <= 9999) || n === 100000) {
            count++;
        }
    }

    return count;
};

module.exports = { findNumbers };
console.log(findNumbers([22]));
