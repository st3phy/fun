/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
const areAlmostEqual = (s1, s2) => {
    if (s1 === s2) return true;

    let mismatched = [];

    // Look for mismatched chars
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            // Save mismatched chars
            mismatched.push([s1[i], s2[i]]);

            // Reached a third mismatched char
            if (mismatched.length > 2) return false;
        }
    }

    return mismatched.length === 2 && mismatched[0][1] === mismatched[1][0] && mismatched[1][1] === mismatched[0][0];
};

module.exports = { areAlmostEqual };

console.log(areAlmostEqual("abbc", "cbba"));
