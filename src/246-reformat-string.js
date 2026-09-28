/**
 * @param {string} s
 * @returns {string}
 */
const reformat = s => {
    // Add digits to an array and chars to anoter array
    const digits = [];
    const chars = [];

    for (const val of s) {
        val >= "0" && val <= "9" ? digits.push(val) : chars.push(val);
    }

    const digitsLen = digits.length;
    const charsLen = chars.length;

    // the digits and numbers must differ by at most 1 so that we can interlace them
    if (Math.abs(digitsLen - charsLen) > 1) return "";

    const res = [];
    // Start adding values starting with the bigger of the two arrays
    if (digitsLen >= charsLen) {
        for (let i = 0; i < digitsLen; i++) {
            res.push(digits[i]);
            if (chars[i]) res.push(chars[i]);
        }
    } else {
        for (let i = 0; i < charsLen; i++) {
            res.push(chars[i]);
            if (digits[i]) res.push(digits[i]);
        }
    }

    return res.join("");
};

module.exports = { reformat };

console.log(reformat("0a1bc2"));
