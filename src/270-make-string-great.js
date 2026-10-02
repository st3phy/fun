/**
 * @param {string} s
 * @returns {string}
 */
const makeGood = s => {
    const res = [];

    for (const char of s) {
        // Get last pushed char from res
        const last = res[res.length - 1];

        // If the current char and the previous one are turning the code bad (upper-lower pair and vice-versa)
        if (last && Math.abs(char.charCodeAt(0) - last.charCodeAt(0)) === 32) {
            res.pop();
        } else {
            res.push(char);
        }
    }

    return res.join("");
};

module.exports = { makeGood };

console.log(makeGood("leEeetcode"));
