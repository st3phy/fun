/**
 * @param {string} sequence
 * @param {string} word
 * @returns {number}
 */
const maxRepeating = (sequence, word) => {
    const sLen = sequence.length;
    const wLen = word.length;

    // word can be repeated in sequence a maximum of sLen/wLen times
    const times = Math.floor(sLen / wLen);

    for (let i = times; i >= 1; i--) {
        const search = word.repeat(i);
        if (sequence.includes(search)) {
            return i;
        }
    }

    return 0;
};

module.exports = { maxRepeating };

console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"));
