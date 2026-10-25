/**
 * @param {string[]} words
 * @param {string} pref
 * @returns {number}
 */
const prefixCount = (words, pref) => {
    return words.filter(word => word.indexOf(pref) === 0).length;
};

module.exports = { prefixCount };

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
