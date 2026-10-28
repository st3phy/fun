/**
 * @param {string} s
 * @returns {character}
 */
const repeatedCharacter = s => {
    const set = new Set();

    for (const ch of s) {
        if (set.has(ch)) return ch;
        set.add(ch);
    }

    return "";
};

module.exports = { repeatedCharacter };

console.log(repeatedCharacter("abcddfc"));
