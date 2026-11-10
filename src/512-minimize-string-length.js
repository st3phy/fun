/**
 * @param {string} s
 * @returns {number}
 */
const minimizedStringLength = s => {
    return new Set(s).size;
};

module.exports = { minimizedStringLength };

console.log(minimizedStringLength("baadccab"));
