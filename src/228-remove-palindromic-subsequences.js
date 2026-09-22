/**
 * @param {string} s
 * @returns {number}
 */
const removePalindromeSub = s => {
    if (s === s.split("").reverse().join("")) {
        return 1;
    }
    return 2;
};

module.exports = { removePalindromeSub };

console.log(removePalindromeSub("ababa"));
