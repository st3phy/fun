/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    const originalColor = image[sr][sc];

    if (originalColor === color) return image;

    const rows = image.length;
    const cols = image[0].length;

    const fill = (row, col) => {
        // Out of bounds - stop recursion
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return;
        }
        // Current cell not the same color as original, stop recursion
        if (image[row][col] !== originalColor) {
            return;
        }

        image[row][col] = color;
        fill(row - 1, col);
        fill(row + 1, col);
        fill(row, col - 1);
        fill(row, col + 1);
    };

    fill(sr, sc);

    return image;
};

module.exports = { floodFill };

console.log(
    floodFill(
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1]
        ],
        1,
        1,
        2
    )
);
