/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @returns {number[]}
 */
const mergeSimilarItems = (items1, items2) => {
    const map = new Map();

    for (const [value, weight] of items1) {
        map.set(value, (map.get(value) || 0) + weight);
    }
    for (const [value, weight] of items2) {
        map.set(value, (map.get(value) || 0) + weight);
    }

    return [...map].sort((a, b) => a[0] - b[0]);
};

module.exports = { mergeSimilarItems };

console.log(
    mergeSimilarItems(
        [
            [1, 1],
            [4, 5],
            [3, 8]
        ],
        [
            [3, 1],
            [1, 5]
        ]
    )
);
