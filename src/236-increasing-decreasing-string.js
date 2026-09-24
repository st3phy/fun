/**
 * @param {string} s
 * @returns {string}
 */
const sortString = s => {
    // Count number of occurrences for each char
    const freq = new Array(26).fill(0);
    for (const char of s) {
        freq[char.charCodeAt(0) - 97]++;
    }

    const res = [];

    while (res.length < s.length) {
        // Loop through chars from a to z
        for (let i = 0; i <= 26; i++) {
            // If char has a frequency larger than one
            if (freq[i] > 0) {
                // Push char to results array
                res.push(String.fromCharCode(i + 97));

                // Decrease frequency
                freq[i]--;
            }
        }

        // And reverse
        for (let i = 26; i >= 0; i--) {
            if (freq[i] > 0) {
                res.push(String.fromCharCode(i + 97));
                freq[i]--;
            }
        }
    }

    return res.join("");
};

module.exports = { sortString };

console.log(sortString("aaaabbbbcccc"));
