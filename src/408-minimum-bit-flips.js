/**
 * @param {number} start
 * @param {number} goal
 * @returns {number}
 */
const minBitFlips = (start, goal) => {
    // Use XOR to only keep set bits for both start and goal - this keeps only the bits we need to flip
    let flipped = start ^ goal;
    let count = 0;

    // Count number of set bits for resulting number
    while (flipped > 0) {
        // Remove 1 set bit at a time
        flipped = (flipped - 1) & flipped;
        count++;
    }

    return count;
};

module.exports = { minBitFlips };

console.log(minBitFlips(10, 7));
