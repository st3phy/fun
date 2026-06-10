/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = (s, k) => {
    // Use an array for the result because strings are immutable so very slow
    const res = [];
    // The length of current group
    let len = 0;

    // Pass through string from end to front
    for (let i = s.length - 1; i >= 0; i--) {
        // If we find a dash, move to next iteration
        if (s[i] === "-") continue;

        // If current group is equal to k, we need to add a dash and re-start len for next group
        if (len === k) {
            res.push("-");
            len = 0;
        }

        // Add uppercased character to results and increment length of current group
        res.push(s[i].toUpperCase());
        len++;
    }

    return res.reverse().join("");
};

module.exports = { licenseKeyFormatting };

console.log(licenseKeyFormatting("sF3Z-x2e-9-w", 4));
