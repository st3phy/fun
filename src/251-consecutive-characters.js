/**
 * @param {string} s
 * @returns {number}
 */
const maxPower = s => {
    let max = 1;
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        max = Math.max(max, count);
    }

    return max;
};

module.exports = { maxPower };

console.log(maxPower("j"));
