/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = s => {
    const times = new Map();

    // Count how many times each letter appears in s
    for (let i = 0; i < s.length; i++) {
        times.set(s[i], (times.get(s[i]) || 0) + 1);
    }

    let size = 0;
    let hasOdd = 0;

    // Use all occurrences from even counts
    // For odd counts, use count-1 so the characters can be mirrored
    times.forEach(value => {
        if (value % 2 === 1) {
            hasOdd = 1;
            size += value - 1;
        } else {
            size += value;
        }
    });

    // One odd-frequency character can be placed in the center
    return hasOdd ? size + 1 : size;
};

module.exports = { longestPalindrome };

console.log(longestPalindrome("abccccdd"));
