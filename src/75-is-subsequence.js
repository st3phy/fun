/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    // Use two pointers to get positions of current chars
    let i = 0,
        j = 0;

    // While we still have chars in one of the  strings
    while (i < t.length && j < s.length) {
        // If characters match, get next char in subsequence
        if (s[j] === t[i]) {
            j++;
        }
        // Get next char in original string
        i++;
    }

    // If we reached end of subsequence, the whole subsequence was matched
    return j === s.length;
};

module.exports = { isSubsequence };

console.log(isSubsequence("", "ahbgdc"));
