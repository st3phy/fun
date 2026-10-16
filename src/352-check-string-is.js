/**
 * @param {string} s
 * @param {string[]} words
 * @returns {boolean}
 */
const isPrefixString = (s, words) => {
    let match = "";

    for (const word of words) {
        match += word;
        if (match.length > s.length) return false;
        if (match === s) return true;
    }

    return false;
};

module.exports = { isPrefixString };

console.log(isPrefixString("iloveleetcode", ["i", "love"]));
