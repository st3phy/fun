/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = (m, n, ops) => {
    // Maximum incrementation amount - every element gets incremented
    let mina = m;
    let minb = n;

    // The integers that always get incremented are created by the smallest ai, bi values
    for (const [a, b] of ops) {
        mina = Math.min(mina, a);
        minb = Math.min(minb, b);
    }

    return mina * minb;
};

module.exports = { maxCount };

console.log(
    maxCount(18, 3, [
        [16, 1],
        [14, 3],
        [14, 2],
        [4, 1],
        [10, 1],
        [11, 1],
        [8, 3],
        [16, 2],
        [13, 1],
        [8, 3],
        [2, 2],
        [9, 1],
        [3, 1],
        [2, 2],
        [6, 3]
    ])
);
