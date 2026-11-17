/**
 * @param {string} s
 * @returns {string}
 */
const finalString = s => {
    const res = [];

    for (const c of s) {
        if (c === "i") {
            res.reverse();
            continue;
        }
        res.push(c);
    }

    return res.join("");
};

module.exports = { finalString };

console.log(finalString("string"));
