/**
 * @param {number} num
 * @param {number} k
 * @returns {number}
 */
const divisorSubstrings = (num, k) => {
    let count = 0;
    const str = num.toString();

    for (let i = 0; i <= str.length - k; i++) {
        const candidate = str.slice(i, i + k);
        if (candidate != 0 && str % candidate === 0) count++;
    }

    return count;
};

module.exports = { divisorSubstrings };

console.log(divisorSubstrings(240, 2));
