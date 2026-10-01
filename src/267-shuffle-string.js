/**
 * @param {string} s
 * @param {number[]} indices
 * @returns {string}
 */
const restoreString = (s, indices) => {
    const chars = [];

    for (let i = 0; i < s.length; i++) {
        chars[indices[i]] = s[i];
    }

    return chars.join("");
};

module.exports = { restoreString };

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
