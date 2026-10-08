/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @returns {boolean}
 */
const arrayStringsAreEqual = (word1, word2) => {
    const str1 = word1.join("");
    const str2 = word2.join("");
    return str1 === str2;
};

module.exports = { arrayStringsAreEqual };

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
