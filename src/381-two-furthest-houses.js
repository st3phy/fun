/**
 * @param {number[]} colors
 * @returns {number}
 */
const maxDistance = colors => {
    let max = 0;
    const n = colors.length;

    for (let i = 0; i < colors.length; i++) {
        if (colors[i] !== colors[n - 1]) {
            max = Math.max(max, i, n - 1 - i);
        }
    }

    return max;
};

module.exports = { maxDistance };

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
