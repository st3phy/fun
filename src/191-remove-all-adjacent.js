/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = s => {
    const res = [];

    for (const char of s) {
        if (res[res.length - 1] === char) {
            res.pop();
        } else {
            res.push(char);
        }
    }

    return res.join("");
};

module.exports = { removeDuplicates };

console.log(removeDuplicates("azxxzy"));
