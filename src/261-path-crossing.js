/**
 * @param {string} path
 * @returns {boolean}
 */
const isPathCrossing = path => {
    // Keep track of points as "x-y", starting point is 0,0
    const points = new Set(["0-0"]);
    let x = 0;
    let y = 0;

    // Possible directions
    const directions = {
        N: [0, 1],
        S: [0, -1],
        E: [1, 0],
        W: [-1, 0]
    };

    for (const direction of path) {
        x += directions[direction][0];
        y += directions[direction][1];

        // Check if current point was already visited before
        const pos = `${x}-${y}`;
        if (points.has(pos)) return true;

        // Add current point to points set
        points.add(pos);
    }

    return false;
};

module.exports = { isPathCrossing };

console.log(isPathCrossing("NESWW"));
