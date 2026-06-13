/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = (a, b) => {
    // // If one of the strings is longer, its length is the longest uncommon subsequence
    // const aLen = a.length;
    // const bLen = b.length;
    // if (aLen > bLen || bLen > aLen) {
    //     return Math.max(aLen, bLen);
    // }

    // let i = aLen;
    // // Compare subsequences, reduce one every as long as they match
    // while (i && a.slice(0, i) === b.slice(0, i)) {
    //     i--;
    // }

    // // i is the length where the subsequences are no longer equal
    // // if i is zero, return -1
    // return i || -1;

    // Intended solution
    // If the strings are equal, return -1, otherwise, the longest subsequence is the size of the longest string
    return a === b ? -1 : Math.max(a.length, b.length);
};

module.exports = { findLUSlength };

console.log(findLUSlength("aaa", "aaa"));
