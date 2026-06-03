/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    // Create array for every possible lowercase char and fill with zeroes
    const letters = Array(26).fill(0);

    // Count how many times each letter appears
    for (let i = 0; i < s.length; i++) {
        letters[s.charCodeAt(i) - 97]++;
    }

    // Check if current letter only appears once
    for (let i = 0; i < s.length; i++) {
        if (letters[s.charCodeAt(i) - 97] === 1) {
            return i;
        }
    }

    return -1;
};

module.exports = { firstUniqChar };

console.log(firstUniqChar("loveleetcode"));
