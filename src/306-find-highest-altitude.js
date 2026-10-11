/**
 * @param {number[]} gain
 * @returns {number}
 */
const largestAltitude = gain => {
    let highest = 0;
    let currAltitude = 0;

    for (const g of gain) {
        currAltitude += g;
        highest = Math.max(highest, currAltitude);
    }

    return highest;
};

module.exports = { largestAltitude };

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
