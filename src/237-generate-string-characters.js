/**
 * @param {number} n
 * @returns {string}
 */
const generateTheString = n => {
    let s = "";

    // If the number is even, removing "1" will result in an odd number
    if (n % 2 === 0) {
        s += "a";
        n--;
    }

    // The remaining number is now odd
    s += "b".repeat(n);

    return s;
};

module.exports = { generateTheString };

console.log(generateTheString(2));
