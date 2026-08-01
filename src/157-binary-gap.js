/**
 * @param {number} n
 * @return {number}
 */
const binaryGap = n => {
    let dist = 0;
    let currentDist = -1;

    while (n > 0) {
        if (n & 1) {
            // we found a 1
            if (currentDist !== -1) {
                // we previously found a 1
                dist = Math.max(dist, currentDist);
            }
            // distance starts at 1 after seeing a 1
            currentDist = 1;
        } else if (currentDist !== -1) {
            // if we found a 0, but we previously found a one, increment current distance
            currentDist++;
        }

        n >>= 1;
    }

    return dist;
};

module.exports = { binaryGap };

console.log(binaryGap(20));
