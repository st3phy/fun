/**
 * @param {string} blocks
 * @param {number} k
 * @returns {number}
 */
const minimumRecolors = (blocks, k) => {
    // Compute number of white blocks for first k set
    let whiteSum = 0;
    for (let i = 0; i < k; i++) {
        if (blocks[i] === "W") whiteSum++;
    }
    let min = whiteSum;

    // Slide to next k sized block
    for (let i = k; i < blocks.length; i++) {
        // Current sum of whites is the previous sum plus 1 if current block is white
        if (blocks[i] === "W") whiteSum++;

        // minus 1 if first block of prev sum was white
        if (blocks[i - k] === "W") whiteSum--;

        min = Math.min(min, whiteSum);
    }

    return min;
};

module.exports = { minimumRecolors };

console.log(minimumRecolors("WWBBBWBBBBBWWBWWWB", 16));
