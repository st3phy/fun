/**
 * @param {number[][]} points
 * @return {number}
 */
const maxWidthOfVerticalArea = points => {
    // Sort points by x pos
    points.sort((a, b) => a[0] - b[0]);

    let max = 0;
    for (let i = 1; i < points.length; i++) {
        const diff = points[i][0] - points[i - 1][0];
        max = Math.max(max, diff);
    }

    return max;
};

module.exports = { maxWidthOfVerticalArea };

console.log(
    maxWidthOfVerticalArea([
        [8, 7],
        [9, 9],
        [7, 4],
        [9, 7]
    ])
);
