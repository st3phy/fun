/**
 * @param {number[][]} edges
 * @returns {number}
 */
const findCenter = edges => {
    // Only the center node is connected to any other node so the node appearing in first 2 connection is the center node
    if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) return edges[0][0];
    if (edges[0][1] === edges[1][0] || edges[0][1] === edges[1][1]) return edges[0][1];
};

module.exports = { findCenter };

console.log(
    findCenter([
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4]
    ])
);
