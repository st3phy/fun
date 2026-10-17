/**
 * @param {string[]} patterns
 * @param {string} word
 * @returns {number}
 */
const numOfStrings = (patterns, word) => {
    let count = 0;
    for (const p of patterns) {
        if (word.includes(p)) count++;
    }

    return count;
};

module.exports = { numOfStrings };

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));
