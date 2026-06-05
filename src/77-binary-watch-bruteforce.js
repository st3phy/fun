/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = turnedOn => {
    // Read bites function
    const readBites = num => {
        let count = 0;
        while (num > 0) {
            // Check if last bite is one or zero and add it to count
            count += num & 1;
            // Shift right to remove last bite
            num >>= 1;
        }
        return count;
    };

    const res = [];

    // Go through all possible hours and minutes
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            // If the bites of current hour and the bites of current minute equal the desired turned on bites
            if (readBites(i) + readBites(j) === turnedOn) {
                // Add combination to res array in desired format
                res.push(`${i}:${j.toString().padStart(2, "0")}`);
            }
        }
    }

    return res;
};

module.exports = { readBinaryWatch };

console.log(readBinaryWatch(9));
