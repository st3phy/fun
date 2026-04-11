/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    // Logical solution - compare each string with the previously found prefix - runtime 6ms
    // common = "";
    // lastCommon = strs[0];

    // for (let i = 1; i < strs.length; i++) {
    //     for (let j = 0; j < strs[i].length; j++) {
    //         if (lastCommon[j] === strs[i][j]) {
    //             common += lastCommon[j];
    //         } else {
    //             break;
    //         }
    //     }
    //     lastCommon = common;
    //     common = "";
    // }
    // return lastCommon || "";

    // Assume first string is the full prefix and shrink it until it matches all others - runtime 0ms
    for (let i = 1; i < strs.length; i++) {
        // Check if strs[0] is a prefix for strs[i]
        while (strs[i].indexOf(strs[0]) !== 0) {
            // If not, reduce it by one character
            strs[0] = strs[0].slice(0, -1);
        }
    }
    return strs[0] ?? "";
};

module.exports = { longestCommonPrefix };

console.log(longestCommonPrefix(["ab", "a"]));
