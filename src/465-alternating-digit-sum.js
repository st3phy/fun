/**
 * @param {number} n
 * @returns {number}
 */
const alternateDigitSum = n => {
    return n
        .toString()
        .split("")
        .reduce((sum, val, i) => {
            val = Number(val);
            if (i % 2) val *= -1;
            return sum + val;
        }, 0);
};

module.exports = { alternateDigitSum };

console.log(alternateDigitSum(521));
