/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    // Track the number of times a character has been found
    const seen = [];

    for (let i = 0; i < s.length; i++) {
        // If the character was found in string s, add 1
        seen[s[i]] = (seen[s[i]] ?? 0) + 1;
        // If the character was found in string t, subtract 1
        seen[t[i]] = (seen[t[i]] ?? 0) - 1;
    }

    // If the string is an anagram, the tracking object should be filled with zeroes
    for (let char in seen) {
        if (seen[char] !== 0) {
            return false;
        }
    }

    return true;
};

module.exports = { isAnagram };

console.log(isAnagram("anagrax", "nagaram"));
