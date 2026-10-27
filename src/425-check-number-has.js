/**
 * @param {string} num
 * @returns {boolean}
 */
const digitCount = num => {
    const freq = new Array(10).fill(0);

    for (const n of num) {
        freq[n]++;
    }

    return freq.join("") === num + "0".repeat(10 - num.length);
};

module.exports = { digitCount };

console.log(digitCount("1210"));
