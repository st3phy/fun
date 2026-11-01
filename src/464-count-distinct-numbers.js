/**
 * @param {number} n
 * @param {number}
 */
const distinctIntegers = n => {
    // Every day we can add (n-1) to the board since n % (n-1) === 1
    // Exception: when n = 1, no number smaller than 1 further satisfies the requirement
    return n === 1 ? 1 : n - 1;
};

module.exports = { distinctIntegers };

console.log(distinctIntegers(5));
