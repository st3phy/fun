/**
 * @param {string} s
 * @returns {number}
 */
const maxLengthBetweenEqualCharacters = s => {
    // Keep track of the first occurrence of each char
    const first = new Map();
    let max = -1;

    for (let i = 0; i < s.length; i++) {
        // If this is the first occurrence of current char, add it to map
        if (!first.has(s[i])) {
            first.set(s[i], i);
        }
        // Otherwise, compute the diff between current occurrence and first occurrence and check if it is bigger than prev max
        else {
            max = Math.max(max, i - first.get(s[i]) - 1);
        }
    }

    return max;
};

module.exports = { maxLengthBetweenEqualCharacters };

console.log(maxLengthBetweenEqualCharacters("abca"));
