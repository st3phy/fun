/**
 * @param {string} s
 * @return {number}
 */
const countSegments = s => {
    // Regular expression to match any non-whitespace character one or more consecutive times
    const regex = /\S+/g;

    // Store all words in the string *match() returns null if there are no matches, so default to empty array
    const words = s.match(regex) || [];

    return words.length;
};

module.exports = { countSegments };

console.log(countSegments(" hasd   asdf "));
