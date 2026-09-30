/**
 * @param {number} n
 * @param {number} start
 * @returns {number}
 */
const xorOperation = (n, start) => {
    let res = 0;

    for (let i = 0; i < n; i++) {
        const curr = start + 2 * i;
        res ^= curr;
    }

    return res;
};

module.exports = { xorOperation };

console.log(xorOperation(5, 0));
