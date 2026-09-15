/**
 * @param {number} n
 * @returns {number}
 */
const countCommas = n => {
    // First 999 numbers have no commas, next 99001 have one comma, for n <= 1e5
    return n < 1000 ? 0 : n - 999;
};

module.exports = { countCommas };

console.log(countCommas(1002));
