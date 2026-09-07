/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gdcOfStrings = (str1, str2) => {
    // Two strings have a common divisor IF a + b === b + a
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    return str1.slice(0, gcd(str1.length, str2.length));
};

module.exports = { gdcOfStrings };

console.log(gdcOfStrings("ABABAB", "ABAB"));
