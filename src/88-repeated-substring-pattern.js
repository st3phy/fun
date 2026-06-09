/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = s => {
    // // Possible lengths of repeatable substring
    // for (let length = 1; length <= s.length / 2; length++) {
    //     // Length must divide the string length evenly
    //     if (s.length % length !== 0) continue;

    //     // Get first substring of current length
    //     const substr = s.slice(0, length);
    //     // Assume current substring is a valid solution
    //     let valid = true;

    //     // Go over string matching remaining substrings of same length
    //     for (let i = length; i < s.length; i += length) {
    //         // If current substring does not match, it is not valid
    //         if (substr !== s.slice(i, i + length)) {
    //             valid = false;
    //             break;
    //         }
    //     }
    //     if (valid) return true;
    // }

    // return false;

    // One-liner solution,
    // A repeated-pattern string appears as a non-trivial rotation of itself.
    // All of those rotations exist inside (s + s), so if s can be found again
    // (excluding the obvious matches at the beginning and end),
    // then s is made of a repeating substring
    return (s + s).slice(1, -1).includes(s);
};

module.exports = { repeatedSubstringPattern };

console.log(repeatedSubstringPattern("abcabcabc"));
