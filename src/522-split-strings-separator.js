/**
 * @param {string[]} words
 * @param {character} separator
 * @returns {string[]}
 */
const splitWordsBySeparator = (words, separator) => {
    return words.join(separator).split(separator).filter(Boolean);
};

module.exports = { splitWordsBySeparator };

console.log(splitWordsBySeparator(["one.two.three", "four.five", "..six."], "."));
