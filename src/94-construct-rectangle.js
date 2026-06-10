/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = area => {
    // The best case scenario: both width and height are sqrt(area) - start with height from there
    for (let height = Math.floor(Math.sqrt(area)); height > 0; height--) {
        // Calculate width
        const width = area / height;
        // If width is an integer
        if (width % 10 === Math.floor(width % 10)) {
            // Return the two values, the bigger one first
            return [Math.max(height, width), Math.min(height, width)];
        }
    }
};

module.exports = { constructRectangle };

console.log(constructRectangle(122122));
