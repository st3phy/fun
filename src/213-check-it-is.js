/**
 * @param {number[][]} coordinates
 * @returns {boolean}
 */
const checkStraightLine = coordinates => {
    // Get coordinates for first two points
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];

    // Check if all of the remaining points are on the same slope
    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        if ((x2 - x1) * (y - y1) !== (y2 - y1) * (x - x1)) {
            return false;
        }
    }

    return true;
};

module.exports = { checkStraightLine };

console.log(
    checkStraightLine([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7]
    ])
);
