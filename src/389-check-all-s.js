/**
 * @param {string} s
 * @returns {boolean}
 */
const checkString = s => {
    const n = s.length;
    let lastA = 0;
    let firstB = n;

    for (let i = 0; i <= n; i++) {
        if (lastA > firstB) return false;
        if (s[i] === "a") {
            lastA = i;
        } else if (firstB === n) {
            firstB = i;
        }
    }

    return true;
};

module.exports = { checkString };

console.log(checkString("aaba"));
