/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
const vowelStrings = (words, left, right) => {
    let count = 0;
    const set = new Set(["a", "e", "i", "o", "u"]);

    for (let i = left; i <= right; i++) {
        if (set.has(words[i][0]) && set.has(words[i][words[i].length - 1])) count++;
    }

    return count;
};

module.exports = { vowelStrings };

console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));
