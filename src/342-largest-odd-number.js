/**
 * @param {string} num
 * @returns {string}
 */
const largestOddNumber = num => {
    for (let i = num.length - 1; i >= 0; i--) {
        if ((num[i] & 1) === 1) {
            return num.slice(0, i + 1);
        }
    }

    return "";
};

module.exports = { largestOddNumber };

console.log(largestOddNumber("35427"));
