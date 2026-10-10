/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @returns {number}
 */
const maximumUnits = (boxTypes, truckSize) => {
    let totalUnites = 0;

    // Sort boxes by number of units, descending
    boxTypes.sort((a, b) => b[1] - a[1]);

    for (const [boxCount, units] of boxTypes) {
        // Check if we have room left on the truck
        if (truckSize === 0) break;

        // Count how many boxes we can add from the current boxTypes
        const count = Math.min(truckSize, boxCount);

        // Count units from current loaded boxes
        totalUnites += units * count;

        // Update truck size
        truckSize -= count;
    }

    return totalUnites;
};

module.exports = { maximumUnits };

console.log(
    maximumUnits(
        [
            [1, 3],
            [5, 5],
            [2, 5],
            [4, 2],
            [4, 1],
            [3, 1],
            [2, 2],
            [1, 3],
            [2, 5],
            [3, 2]
        ],
        35
    )
);
