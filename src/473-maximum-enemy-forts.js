/**
 * @param {number[]} forts
 * @returns {number}
 */
const captureForts = forts => {
    let lastFort = 0;
    let lastIndex = 0;
    let max = 0;

    for (let i = 0; i < forts.length; i++) {
        if (forts[i] === 0) continue;

        // If we last encountered a 1 and now we find a -1 or vice-versa, count everything in between
        if (lastFort !== 0 && lastFort !== forts[i]) {
            max = Math.max(max, i - lastIndex - 1);
        }

        lastFort = forts[i];
        lastIndex = i;
    }

    return max;
};

module.exports = { captureForts };

console.log(captureForts([1, 0, 0, -1, 0, 1]));
