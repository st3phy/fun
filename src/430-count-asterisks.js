/**
 * @param {string} s
 * @returns {number}
 */
const countAsterisks = s => {
    let count = 0;
    let pair = false;

    for (const ch of s) {
        if (ch === "|") {
            pair = !pair;
        } else if (ch === "*" && !pair) {
            count++;
        }
    }

    return count;
};

module.exports = { countAsterisks };

console.log(countAsterisks("l|*e*et|c**o|*de|"));
