/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    // One liner using JS String.prototype.indexOf() - 0ms
    //return haystack.indexOf(needle);

    // Algorithmic solution - no built-in function - optimal - 0ms
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
};

module.exports = { strStr };

console.log(strStr("mississippi;", "issip"));
