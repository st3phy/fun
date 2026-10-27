/**
 * @param {string} s
 * @param {character} letter
 * @returns {number}
 */
const percentageLetter = (s, letter) => {
    const n = s.length;
    let count = 0;

    for (const char of s) {
        if (char === letter) count++;
    }

    return Math.floor((count / n) * 100);
};

module.exports = { percentageLetter };

console.log(percentageLetter("sgawtb", "s"));
