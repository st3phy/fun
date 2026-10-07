/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = (releaseTimes, keysPressed) => {
    // Assume longest pressed first char
    let longestTime = releaseTimes[0];
    let longestKey = keysPressed[0];

    for (let i = 1; i < releaseTimes.length; i++) {
        const currentTime = releaseTimes[i] - releaseTimes[i - 1];
        if (currentTime > longestTime) {
            longestTime = currentTime;
            longestKey = keysPressed[i];
        } else if (currentTime === longestTime && keysPressed[i] > longestKey) {
            longestKey = keysPressed[i];
        }
    }

    return longestKey;
};

module.exports = { slowestKey };

console.log(slowestKey([9, 29, 49, 50], "cbcd"));
