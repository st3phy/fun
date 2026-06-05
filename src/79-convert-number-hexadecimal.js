/**
 * @param {number} num
 * @return {string}
 */
const toHex = num => {
    if (num === 0) return "0";

    // Hex values
    const hex_chars = "0123456789abcdef";
    let res = "";

    // Convert num to an unsigned 32-bit integer
    num >>>= 0;

    // Convert number to hex
    while (num > 0) {
        res = hex_chars[num % 16] + res;
        num >>>= 4;
    }

    return res;
};

module.exports = { toHex };

console.log(toHex(-1));
