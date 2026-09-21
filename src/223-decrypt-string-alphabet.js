/**
 * @param {string} s
 * @returns {string}
 */
const freqAlphabets = s => {
    const res = [];

    // Start from end of string
    let i = s.length - 1;
    while (i >= 0) {
        let current = "";

        // If current char is a "#", we need to read the previous 2 values to form our char
        if (s[i] === "#") {
            current += s[i - 2] + s[i - 1];
            i -= 3;
        }
        // Otherwise, read the current value
        else {
            current = s[i];
            i--;
        }

        // Add formed number to res array after transforming it to its corresponding charcode
        res.push(String.fromCharCode(Number(current) + 96));
    }

    return res.reverse().join("");
};

module.exports = { freqAlphabets };

console.log(freqAlphabets("10#11#12"));
