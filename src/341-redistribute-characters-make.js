/**
 * @param {string[]} words
 * @returns {boolean}
 */
const makeEqual = words => {
    // Count chars in all words. They should all be multiple of words.length
    const count = new Map();
    const n = words.length;

    for (const word of words) {
        for (const ch of word) {
            count.set(ch, (count.get(ch) || 0) + 1);
        }
    }

    for (const val of count.values()) {
        if (val % n !== 0) return false;
    }

    return true;
};

module.exports = { makeEqual };

console.log(makeEqual(["abc", "aabc", "bc"]));
