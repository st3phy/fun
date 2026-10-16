/**
 * @param {string} s
 * @returns {boolean}
 */
const areOccurrencesEqual = s => {
    const freq = new Array(26).fill(0);

    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    // All chars should appear the same number of times as the first one
    const first = freq[s[0].charCodeAt(0) - 97];

    return freq.every(val => val === first || val === 0);
};

module.exports = { areOccurrencesEqual };

console.log(areOccurrencesEqual("abcabc"));
