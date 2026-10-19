/**
 * @param {string} word
 * @param {string} ch
 * @returns {string}
 */
const reversePrefix = (word, ch) => {
    const i = word.indexOf(ch);

    return [...word.slice(0, i + 1)].reverse().join("") + word.slice(i + 1);
};

module.exports = { reversePrefix };

console.log(reversePrefix("abcdefd", "d"));
