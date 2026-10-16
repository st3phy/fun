/**
 * @param {number} n
 * @returns {number}
 */
const countTriples = n => {
    let count = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = a; b <= n; b++) {
            const c = Math.sqrt(a * a + b * b);
            if (Number.isInteger(c) && c <= n) {
                count += 2;
            }
        }
    }

    return count;
};

module.exports = { countTriples };

console.log(countTriples(20));
