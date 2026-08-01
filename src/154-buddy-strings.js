/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = (s, goal) => {
    const sLen = s.length;
    const goalLen = goal.length;

    // The strings have different lengths
    if (sLen !== goalLen) return false;

    // The strings are equal and have only unique characters
    if (s === goal) {
        if (new Set(s).size === sLen) return false;
    }

    // Find different chars
    const diff = [];
    for (let i = 0; i < sLen; i++) {
        // Save the different chars and their position
        if (s[i] !== goal[i]) diff.push([s[i], goal[i]]);
        // If we found more than 2 different chars, the strings cannot be buddy strings
        if (diff.length > 2) return false;
    }

    // If diff is empty, we had identical strings, with non-unique characters
    return diff.length === 0 || (diff.length === 2 && diff[0][0] === diff[1][1] && diff[0][1] === diff[1][0]);
};

module.exports = { buddyStrings };
