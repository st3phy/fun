/**
 * @param {string[]} words
 * @param {string} s
 * @returns {number}
 */
const countPrefixes = (words, s) => {
    let count = 0;

    for (const word of words) {
        if (s.indexOf(word) === 0) count++;
    }

    return count;
};

module.exports = { countPrefixes };

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
