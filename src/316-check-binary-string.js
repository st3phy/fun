/**
 * @param {string} s
 * @returns {boolean}
 */
const checkOnesSegment = s => {
    let foundSegment = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            // This is the second segment
            if (s[i - 1] === "0" && foundSegment) return false;
            foundSegment = true;
        }
    }

    return true;
};

module.exports = { checkOnesSegment };

console.log(checkOnesSegment("110"));
