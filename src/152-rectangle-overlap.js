/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = (rec1, rec2) => {
    // The triangles will overlap if the left side of rec2 is before right side of rec1 or vice-versa
    return rec2[0] < rec1[2] && rec2[1] < rec1[3] && rec1[0] < rec2[2] && rec1[1] < rec2[3];
};

module.exports = { isRectangleOverlap };

console.log(isRectangleOverlap([5, 15, 8, 18], [0, 3, 7, 9]));
