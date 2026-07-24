/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = points => {
    // 3 point triangle area formula: 1/2*|x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2)|
    let max = 0;

    // Brute force every combination of 3 points
    for (let i = 0; i < points.length - 2; i++) {
        for (let j = i + 1; j < points.length - 1; j++) {
            for (let k = j + 1; k < points.length; k++) {
                // Compute current area
                const current =
                    (1 / 2) *
                    Math.abs(
                        points[i][0] * (points[j][1] - points[k][1]) +
                            points[j][0] * (points[k][1] - points[i][1]) +
                            points[k][0] * (points[i][1] - points[j][1])
                    );
                max = Math.max(max, current);
            }
        }
    }

    return max;
};

module.exports = { largestTriangleArea };
