/**
 * @param {Number[][]} points
 * @return {boolean}
 */
const isBoomerang = points => {
    /* If the triangle area of 3 points is 0, the points are on the same line
    x1(y2-y3) + x2(y3-y1) + x3(y1-y2) - formula for triangle area*/
    const area =
        points[0][0] * (points[1][1] - points[2][1]) +
        points[1][0] * (points[2][1] - points[0][1]) +
        points[2][0] * (points[0][1] - points[1][1]);

    return area !== 0;
};

module.exports = { isBoomerang };
