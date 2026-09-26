/**
 * Check if a string is a substring of another string
 *
 * @param {string} a possible substring
 * @param {string} b string to search in
 * @returns {boolean}
 */
const isSubstring = (a, b) => {
    for (let i = 0; i < b.length; i++) {
        let j = 0;
        while (j < a.length) {
            if (a[j] !== b[i + j]) break;
            if (j === a.length - 1) return true;
            j++;
        }
    }
    return false;
};

/**
 * @param {string[]} words
 * @returns {string[]}
 */
const stringMatching = words => {
    words.sort((a, b) => a.length - b.length);

    const res = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isSubstring(words[i], words[j])) {
                res.push(words[i]);
                break;
            }
        }
    }

    console.log(words);

    return res;
};

module.exports = { stringMatching };

console.log(stringMatching(["leetcode", "et"]));
