/**
 * @param {string} sentence
 * @returns {boolean}
 */
const isCircularSentence = sentence => {
    const n = sentence.length;

    for (let i = 0; i < n; i++) {
        if (sentence[i] === " ") {
            if (sentence[i - 1] !== sentence[i + 1]) return false;
        }
    }

    return sentence[0] === sentence[n - 1];
};

module.exports = { isCircularSentence };

console.log(isCircularSentence("leetcode exercises sound delightful"));
