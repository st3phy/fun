/**
 * @param {string} s
 * @returns {number}
 */
const balancedStringSplit = s => {
    let balance = 0;
    count = 0;

    for (let i = 0; i < s.length; i++) {
        // If current char is "R", increment counter
        if (s[i] === "R") {
            balance++;
        }
        // Otherwise, decrement counter
        else {
            balance--;
        }

        // If counter reached "0", we have a valid balanced substring
        if (balance === 0) {
            count++;
        }
    }

    return count;
};

module.exports = { balancedStringSplit };

console.log(balancedStringSplit("RLRRRLLRLL"));
