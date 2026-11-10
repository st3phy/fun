/**
 * @param {number} n
 * @returns {boolean}
 */
const isFascinating = n => {
    const candidate = "" + n + n * 2 + n * 3;

    if (candidate.length === 9) {
        const unique = new Set(candidate);
        if (unique.size === 9 && !unique.has("0")) return true;
    }

    return false;
};

module.exports = { isFascinating };

console.log(isFascinating(100));
