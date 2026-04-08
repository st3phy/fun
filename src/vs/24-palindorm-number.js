/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
    if (x < 0) {
        return false;
    }
    const xRev = `${x}`.split("").reverse().join("");

    return xRev == `${x}`;
};

module.exports = { isPalindrome };

console.log(isPalindrome(12321));
