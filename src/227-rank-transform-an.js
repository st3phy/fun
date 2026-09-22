/**
 * @param {number[]} arr
 * @returns {number[]}
 */
const arrayRankTransform = arr => {
    const map = new Map();

    // Sort arr
    const sorted = [...arr].sort((a, b) => a - b);

    // Compute and map rank for every value in sorted array
    let rank = 0;
    for (let i = 0; i < arr.length; i++) {
        // If current value is different than previous one, increment rank
        if (sorted[i] !== sorted[i - 1]) {
            rank++;
        }
        map.set(sorted[i], rank);
    }

    return arr.map(val => map.get(val));
};

module.exports = { arrayRankTransform };

console.log(arrayRankTransform([40, 10, 20, 30]));
