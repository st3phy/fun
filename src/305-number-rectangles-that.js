/**
 * @param {number[][]} rectangles
 * @returns {number}
 */
const countGoodRectangles = rectangles => {
    let maxLen = 0;
    let count = 0;

    for (const [len, width] of rectangles) {
        // Find the largest square side this rectangle can form
        const currentMax = Math.min(len, width);

        // If we find a larger square, update maxLen and reset the count
        if (currentMax > maxLen) {
            count = 1;
            maxLen = currentMax;
        } else if (currentMax === maxLen) {
            // Another rectangle can form a square of the current maximum size
            count++;
        }
    }

    return count;
};

module.exports = { countGoodRectangles };

console.log(
    countGoodRectangles([
        [2, 3],
        [3, 7],
        [4, 3],
        [3, 7]
    ])
);
