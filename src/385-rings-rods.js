/**
 * @param {string} rings
 * @returns {number}
 */
const countPoints = rings => {
    // Create array for rods
    const arr = new Array(10).fill(0);
    let count = 0;

    // Map the three colors to numbers whose set bits don't overlap (1, 10, 100)
    const map = {
        R: 1,
        G: 2,
        B: 4
    };

    for (let i = 0; i < rings.length; i += 2) {
        // Add mapped value of current color to current rod, uring binary OR
        arr[rings[i + 1]] |= map[rings[i]];

        // If the current rod reached "111" in binary, it means we have all colors (1 | 10 | 100 = 7)
        if (arr[rings[i + 1]] === 7) {
            count++;
            // Give the current rod a bigger value so we never count it again
            arr[rings[i + 1]] = 8;
        }
    }

    return count;
};

module.exports = { countPoints };

console.log(countPoints("B0B6G0R6R0R6G9"));
