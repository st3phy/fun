/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
    let char = 0;

    // Transform every character of s and t to ascii and use XOR to find the only value without a pair
    for (let i = 0; i < s.length; i++) {
        char ^= s.charCodeAt(i);
    }

    for (let i = 0; i < t.length; i++) {
        char ^= t.charCodeAt(i);
    }

    // Convert Unicode value back to char
    return String.fromCharCode(char);
};

module.exports = { findTheDifference };
