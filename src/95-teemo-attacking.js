/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = (timeSeries, duration) => {
    // Store total poisoned seconds
    let poisoned = 0;

    // Go through all attacks except last
    for (let i = 0; i < timeSeries.length - 1; i++) {
        // Add poisoned seconds as duration or next attack - current attack in case current attack is interrupted
        poisoned += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
    }

    // Add the duration of last attack to total poisoned seconds
    return poisoned + duration;
};

module.exports = { findPoisonedDuration };
