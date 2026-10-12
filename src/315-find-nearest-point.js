/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @returns {number}
 */
const nearestValidPoint = (x, y, points) => {
    let index = -1;
    let min = Infinity;

    for (let i = 0; i < points.length; i++) {
        if (x === points[i][0] || y === points[i][1]) {
            const manhattanDist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
            if (manhattanDist < min) {
                min = manhattanDist;
                index = i;
            }
        }
    }

    return index;
};

module.exports = { nearestValidPoint };

console.log(
    nearestValidPoint(3, 4, [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4]
    ])
);
